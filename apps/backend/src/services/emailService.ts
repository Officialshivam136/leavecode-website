import nodemailer from 'nodemailer';
import { config } from '../config/env.js';

interface EmailPayload {
  to: string;
  subject: string;
  text: string;
  html: string;
}

// Configurable notification service with automatic graceful fallback
export async function sendLeadNotification(leadData: {
  fullName: string;
  businessEmail: string;
  phoneNumber?: string;
  companyOrWebsite?: string;
  serviceOfInterest: string;
  budgetRange?: string;
  projectDescription: string;
}): Promise<boolean> {
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = parseInt(process.env.SMTP_PORT || '587', 10);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const alertRecipient = process.env.LEAD_ALERT_EMAIL || 'info@leavecode.com';

  const subject = `[New Project Inquiry] ${leadData.serviceOfInterest} - ${leadData.fullName}`;
  const textBody = `
New Project Inquiry Received at LeaveCode Technologies:

Name: ${leadData.fullName}
Business Email: ${leadData.businessEmail}
Phone: ${leadData.phoneNumber || 'Not provided'}
Company/Website: ${leadData.companyOrWebsite || 'Not provided'}
Service: ${leadData.serviceOfInterest}
Budget Range: ${leadData.budgetRange || 'Flexible'}

Project Scope:
${leadData.projectDescription}
`;

  const htmlBody = `
<div style="font-family: system-ui, sans-serif; max-width: 600px; padding: 20px; background: #070A0F; color: #F1F5F9; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1);">
  <h2 style="color: #6366F1; margin-top: 0;">New Project Inquiry</h2>
  <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 20px;">
    <tr><td style="padding: 8px 0; color: #94A3B8;">Full Name:</td><td style="padding: 8px 0; font-weight: bold;">${leadData.fullName}</td></tr>
    <tr><td style="padding: 8px 0; color: #94A3B8;">Business Email:</td><td style="padding: 8px 0; font-weight: bold;"><a href="mailto:${leadData.businessEmail}" style="color: #06B6D4;">${leadData.businessEmail}</a></td></tr>
    <tr><td style="padding: 8px 0; color: #94A3B8;">Phone:</td><td style="padding: 8px 0;">${leadData.phoneNumber || 'Not provided'}</td></tr>
    <tr><td style="padding: 8px 0; color: #94A3B8;">Company/Website:</td><td style="padding: 8px 0;">${leadData.companyOrWebsite || 'Not provided'}</td></tr>
    <tr><td style="padding: 8px 0; color: #94A3B8;">Service:</td><td style="padding: 8px 0; font-weight: bold; color: #6366F1;">${leadData.serviceOfInterest}</td></tr>
    <tr><td style="padding: 8px 0; color: #94A3B8;">Budget Range:</td><td style="padding: 8px 0;">${leadData.budgetRange || 'Flexible'}</td></tr>
  </table>
  <h4 style="color: #CBD5E1; margin-bottom: 8px;">Project Scope:</h4>
  <div style="background: #0D121B; padding: 14px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.06); font-size: 13px; line-height: 1.6;">
    ${leadData.projectDescription.replace(/\n/g, '<br/>')}
  </div>
</div>
`;

  // If real SMTP credentials exist in .env, attempt dispatch
  if (smtpHost && smtpUser && smtpPass) {
    try {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: { user: smtpUser, pass: smtpPass },
      });

      await transporter.sendMail({
        from: `"LeaveCode Platform" <${smtpUser}>`,
        to: alertRecipient,
        replyTo: leadData.businessEmail,
        subject,
        text: textBody,
        html: htmlBody,
      });

      console.log(`[Email Service] Live notification sent for inquiry: ${leadData.businessEmail}`);
      return true;
    } catch (err: any) {
      console.warn(`[Email Service] Warning: SMTP delivery failed (${err.message}). Falling back to internal log.`);
      return false;
    }
  }

  // Graceful development logger (zero crash)
  console.log(`[Email Service Notification] (Dev Log Mode -> ${alertRecipient})`);
  console.log(`Subject: ${subject}`);
  return true;
}
