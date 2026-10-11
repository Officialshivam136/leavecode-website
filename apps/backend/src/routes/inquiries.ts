import { Router, Request, Response, NextFunction } from 'express';
import { InquirySchema } from '@leavecode/shared';

export const inquiriesRouter = Router();

// Placeholder endpoint demonstrating end-to-end validation with shared schema
inquiriesRouter.post('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const validatedData = InquirySchema.parse(req.body);

    // Business logic / Mongoose persistence will be wired in sprint 2
    res.status(201).json({
      success: true,
      message: 'Inquiry received successfully',
      data: {
        fullName: validatedData.fullName,
        service: validatedData.service,
        timeline: validatedData.timeline
      }
    });
  } catch (error) {
    next(error);
  }
});
