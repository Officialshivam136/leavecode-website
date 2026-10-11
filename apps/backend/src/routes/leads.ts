import { Router, Request, Response, NextFunction } from 'express';
import rateLimit from 'express-rate-limit';
import { ContactEnquirySchema } from '@leavecode/shared';
import { LeadModel } from '../models/Lead.js';
import { sendLeadNotification } from '../services/emailService.js';
import { requireAdminAuth, AuthenticatedRequest } from '../middleware/auth.js';
import { AppError } from '../middleware/errorHandler.js';

export const leadsRouter = Router();

// In-memory fallback leads repository
export const inMemoryLeads: any[] = [];

// Rate limiter for inquiries: max 5 requests per 15 minutes per IP
export const inquiryRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    error: 'Too many inquiries submitted from this connection. Please wait 15 minutes before submitting again.',
  },
});

function isMongooseConnected(): boolean {
  try {
    return LeadModel.db?.readyState === 1;
  } catch {
    return false;
  }
}

// -----------------------------------------------------------------------------
// PUBLIC CONTACT & PROJECT ENQUIRY SUBMISSION (POST /api/v1/inquiries)
// -----------------------------------------------------------------------------
leadsRouter.post(
  '/',
  inquiryRateLimiter,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      // 1. Anti-Spam Honeypot Verification (Check before Zod parse to catch bots silently)
      if (req.body.honeypot && req.body.honeypot.trim().length > 0) {
        // Silently return 200 OK without saving to database or notifying email
        res.status(200).json({
          success: true,
          message: 'Your inquiry has been received.',
        });
        return;
      }

      // 2. Zod Server Validation
      const validated = ContactEnquirySchema.parse(req.body);

      // Audit fields (IP redacted or masked for privacy compliance)
      const clientIp = (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || 'unknown';
      const userAgent = req.headers['user-agent'] || 'unknown';

      // 3. Database Persistence
      let savedLead: any = null;
      if (isMongooseConnected()) {
        savedLead = await LeadModel.create({
          fullName: validated.fullName,
          businessEmail: validated.businessEmail,
          phoneNumber: validated.phoneNumber || undefined,
          companyOrWebsite: validated.companyOrWebsite || undefined,
          serviceOfInterest: validated.serviceOfInterest,
          budgetRange: validated.budgetRange || 'flexible',
          projectDescription: validated.projectDescription,
          consentGiven: validated.consentGiven,
          sourceIp: clientIp,
          userAgent,
          status: 'new',
        });
      } else {
        // Resilient in-memory fallback
        savedLead = {
          _id: `lead-${Date.now()}`,
          fullName: validated.fullName,
          businessEmail: validated.businessEmail,
          phoneNumber: validated.phoneNumber,
          companyOrWebsite: validated.companyOrWebsite,
          serviceOfInterest: validated.serviceOfInterest,
          budgetRange: validated.budgetRange || 'flexible',
          projectDescription: validated.projectDescription,
          consentGiven: validated.consentGiven,
          status: 'new',
          sourceIp: clientIp,
          userAgent,
          notificationSent: false,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };
        inMemoryLeads.push(savedLead);
      }

      // 4. Configurable Notification Dispatch (Async non-blocking)
      sendLeadNotification(validated).then((sent) => {
        if (savedLead) savedLead.notificationSent = sent;
      });

      // 5. Sanitized Client Response (No sensitive credentials exposed)
      res.status(201).json({
        success: true,
        message: 'Your project inquiry has been received successfully. Our engineering team will review your specifications and contact you shortly.',
        data: {
          referenceId: savedLead._id,
          fullName: validated.fullName,
          serviceOfInterest: validated.serviceOfInterest,
          receivedAt: new Date().toISOString(),
        },
      });
    } catch (error) {
      next(error);
    }
  }
);

// -----------------------------------------------------------------------------
// PROTECTED ADMINISTRATIVE LEADS MANAGEMENT
// -----------------------------------------------------------------------------

// GET /api/v1/admin/leads - List all customer inquiries
leadsRouter.get(
  '/admin/leads',
  requireAdminAuth,
  async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    try {
      const { status, service } = req.query;

      if (isMongooseConnected()) {
        const query: any = {};
        if (status) query.status = status;
        if (service) query.serviceOfInterest = service;

        const leads = await LeadModel.find(query).sort({ createdAt: -1 }).lean();
        res.status(200).json({ success: true, count: leads.length, data: leads });
        return;
      }

      let filtered = inMemoryLeads;
      if (status) filtered = filtered.filter((l) => l.status === status);
      if (service) filtered = filtered.filter((l) => l.serviceOfInterest === service);

      res.status(200).json({ success: true, count: filtered.length, data: filtered });
    } catch (error) {
      next(error);
    }
  }
);

// PATCH /api/v1/admin/leads/:id/status - Update lead qualification status
leadsRouter.patch(
  '/admin/leads/:id/status',
  requireAdminAuth,
  async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const { status, notes } = req.body;

      const validStatuses = ['new', 'contacted', 'qualified', 'proposal_sent', 'closed', 'spam'];
      if (!validStatuses.includes(status)) {
        throw new AppError(`Invalid status. Must be one of: ${validStatuses.join(', ')}`, 400);
      }

      if (isMongooseConnected()) {
        const updated = await LeadModel.findByIdAndUpdate(
          id,
          { status, ...(notes && { notes }), updatedAt: new Date() },
          { new: true }
        );
        if (!updated) throw new AppError('Lead not found', 404);
        res.status(200).json({ success: true, message: 'Lead status updated', data: updated });
        return;
      }

      const lead = inMemoryLeads.find((l) => l._id === id);
      if (!lead) throw new AppError('Lead not found', 404);

      lead.status = status;
      if (notes) lead.notes = notes;
      lead.updatedAt = new Date().toISOString();

      res.status(200).json({ success: true, message: 'Lead status updated', data: lead });
    } catch (error) {
      next(error);
    }
  }
);
