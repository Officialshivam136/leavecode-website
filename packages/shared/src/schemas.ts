import { z } from 'zod';

export const InquirySchema = z.object({
  fullName: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name cannot exceed 100 characters'),
  email: z
    .string()
    .email('Please provide a valid email address'),
  phone: z
    .string()
    .min(7, 'Phone number must be at least 7 digits')
    .max(20, 'Phone number cannot exceed 20 characters'),
  service: z.enum([
    'web-development',
    'mobile-app-development',
    'ecommerce-development',
    'ui-ux-branding',
    'seo-services',
    'performance-marketing',
    'social-media-marketing',
    'app-store-optimization',
    'website-maintenance',
    'other'
  ]),
  budgetRange: z.enum([
    'under-5k',
    '5k-15k',
    '15k-30k',
    '30k-50k',
    '50k-plus'
  ]),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message cannot exceed 2000 characters'),
  timeline: z.enum(['immediate', '1-month', '1-3-months', 'flexible']).default('flexible'),
  country: z.string().optional()
});

export type InquiryInput = z.infer<typeof InquirySchema>;

export const QuoteCalculatorSchema = z.object({
  projectType: z.enum(['custom-web-app', 'ecommerce', 'mobile-app', 'marketing-growth', 'maintenance']),
  scopeComplexity: z.enum(['mvp', 'standard', 'enterprise']),
  selectedAddons: z.array(z.string()).default([]),
  expectedTimelineWeeks: z.number().int().positive().optional(),
  clientContact: z.object({
    name: z.string().min(2),
    email: z.string().email(),
    company: z.string().optional()
  })
});

export type QuoteCalculatorInput = z.infer<typeof QuoteCalculatorSchema>;

export const HealthCheckResponseSchema = z.object({
  status: z.literal('ok'),
  timestamp: z.string(),
  uptime: z.number(),
  service: z.string(),
  environment: z.string(),
  database: z.enum(['connected', 'disconnected', 'connecting'])
});

export type HealthCheckResponse = z.infer<typeof HealthCheckResponseSchema>;
