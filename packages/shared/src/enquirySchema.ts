import { z } from 'zod';

export const ContactEnquirySchema = z.object({
  fullName: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name cannot exceed 100 characters')
    .trim(),
  businessEmail: z
    .string()
    .email('Please provide a valid corporate or business email address')
    .max(120)
    .trim()
    .toLowerCase(),
  phoneNumber: z
    .string()
    .max(25, 'Phone number cannot exceed 25 characters')
    .optional()
    .or(z.literal('')),
  companyOrWebsite: z
    .string()
    .max(150, 'Company or website cannot exceed 150 characters')
    .optional()
    .or(z.literal('')),
  serviceOfInterest: z.enum([
    'web-development',
    'mobile-app-development',
    'ecommerce-development',
    'seo-services',
    'performance-marketing',
    'ui-ux-branding',
    'social-media-marketing',
    'app-store-optimization',
    'website-maintenance',
    'other'
  ]),
  budgetRange: z
    .enum(['under-5k', '5k-15k', '15k-30k', '30k-50k', '50k-plus', 'flexible'])
    .optional()
    .default('flexible'),
  projectDescription: z
    .string()
    .min(15, 'Please provide at least 15 characters describing your project needs')
    .max(3000, 'Project description cannot exceed 3000 characters')
    .trim(),
  consentGiven: z
    .boolean()
    .refine((val) => val === true, 'You must acknowledge consent to proceed'),
  // Anti-Spam Honeypot field (must remain empty for humans)
  honeypot: z.string().max(0, 'Spam detected').optional().or(z.literal(''))
});

export type ContactEnquiryInput = z.infer<typeof ContactEnquirySchema>;
