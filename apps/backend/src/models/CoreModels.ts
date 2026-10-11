import mongoose, { Schema, Document } from 'mongoose';

// 1. Service Model
export interface IServiceDoc extends Document {
  slug: string;
  category: string;
  title: string;
  tagline: string;
  targetAudience: string;
  deliverables: { title: string; description: string }[];
  techStack: string[];
  isActive: boolean;
  displayOrder: number;
}

const ServiceSchema = new Schema<IServiceDoc>(
  {
    slug: { type: String, required: true, unique: true, index: true },
    category: { type: String, required: true, index: true },
    title: { type: String, required: true },
    tagline: { type: String, required: true },
    targetAudience: { type: String, required: true },
    deliverables: [{ title: String, description: String }],
    techStack: [String],
    isActive: { type: Boolean, default: true, index: true },
    displayOrder: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const ServiceModel =
  mongoose.models.Service || mongoose.model<IServiceDoc>('Service', ServiceSchema);

// 2. Case Study Model
export interface ICaseStudyDoc extends Document {
  slug: string;
  title: string;
  projectType: string;
  category: string;
  tagline: string;
  clientContext: {
    clientName: string;
    industry: string;
    region?: string;
    disclosureNote: string;
  };
  problemOrOpportunity: string;
  scopeOfWork: string[];
  techStack: string[];
  isFeatured: boolean;
}

const CaseStudySchema = new Schema<ICaseStudyDoc>(
  {
    slug: { type: String, required: true, unique: true, index: true },
    title: { type: String, required: true },
    projectType: { type: String, required: true },
    category: { type: String, required: true, index: true },
    tagline: { type: String, required: true },
    clientContext: {
      clientName: { type: String, required: true },
      industry: { type: String, required: true },
      region: String,
      disclosureNote: { type: String, required: true },
    },
    problemOrOpportunity: { type: String, required: true },
    scopeOfWork: [String],
    techStack: [String],
    isFeatured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const CaseStudyModel =
  mongoose.models.CaseStudy || mongoose.model<ICaseStudyDoc>('CaseStudy', CaseStudySchema);

// 3. Testimonial Model
export interface ITestimonialDoc extends Document {
  quote: string;
  clientName: string;
  role: string;
  company: string;
  projectScope: string;
  isAuthorized: boolean;
  isActive: boolean;
}

const TestimonialSchema = new Schema<ITestimonialDoc>(
  {
    quote: { type: String, required: true },
    clientName: { type: String, required: true },
    role: { type: String, required: true },
    company: { type: String, required: true },
    projectScope: { type: String, required: true },
    isAuthorized: { type: Boolean, required: true },
    isActive: { type: Boolean, default: true, index: true },
  },
  { timestamps: true }
);

export const TestimonialModel =
  mongoose.models.Testimonial || mongoose.model<ITestimonialDoc>('Testimonial', TestimonialSchema);

// 4. Site Settings Model
export interface ISiteSettingsDoc extends Document {
  siteName: string;
  tagline: string;
  primaryEmail: string;
  phoneIndia: string;
  phoneUSA: string;
  offices: { country: string; address: string; type: string }[];
  enableLeadNotifications: boolean;
  maintenanceMode: boolean;
}

const SiteSettingsSchema = new Schema<ISiteSettingsDoc>(
  {
    siteName: { type: String, default: 'LeaveCode Technologies' },
    tagline: { type: String, default: 'Engineering Premium Digital Products & High-Impact Growth' },
    primaryEmail: { type: String, default: 'info@leavecode.com' },
    phoneIndia: { type: String, default: '+91 (812) 685-2802' },
    phoneUSA: { type: String, default: '+1 386 243 7860' },
    offices: [
      {
        country: String,
        address: String,
        type: String,
      },
    ],
    enableLeadNotifications: { type: Boolean, default: true },
    maintenanceMode: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const SiteSettingsModel =
  mongoose.models.SiteSettings || mongoose.model<ISiteSettingsDoc>('SiteSettings', SiteSettingsSchema);
