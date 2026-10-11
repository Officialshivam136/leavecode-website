import mongoose, { Schema, Document } from 'mongoose';

export interface ILead extends Document {
  fullName: string;
  businessEmail: string;
  phoneNumber?: string;
  companyOrWebsite?: string;
  serviceOfInterest: string;
  budgetRange: string;
  projectDescription: string;
  consentGiven: boolean;
  status: 'new' | 'contacted' | 'qualified' | 'proposal_sent' | 'closed' | 'spam';
  sourceIp?: string;
  userAgent?: string;
  notificationSent: boolean;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

const LeadSchema = new Schema<ILead>(
  {
    fullName: { type: String, required: true, trim: true },
    businessEmail: { type: String, required: true, trim: true, lowercase: true, index: true },
    phoneNumber: { type: String, trim: true },
    companyOrWebsite: { type: String, trim: true },
    serviceOfInterest: { type: String, required: true, index: true },
    budgetRange: { type: String, default: 'flexible' },
    projectDescription: { type: String, required: true, trim: true },
    consentGiven: { type: Boolean, required: true },
    status: {
      type: String,
      enum: ['new', 'contacted', 'qualified', 'proposal_sent', 'closed', 'spam'],
      default: 'new',
      index: true,
    },
    sourceIp: { type: String },
    userAgent: { type: String },
    notificationSent: { type: Boolean, default: false },
    notes: { type: String },
  },
  { timestamps: true }
);

LeadSchema.index({ createdAt: -1 });

export const LeadModel = mongoose.models.Lead || mongoose.model<ILead>('Lead', LeadSchema);
