import mongoose, { Schema, Document } from 'mongoose';

export interface IBlogPost extends Document {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    role: string;
    bio: string;
    email?: string;
    avatarUrl?: string;
  };
  category: string;
  tags: string[];
  featuredImage?: {
    url: string;
    altText: string;
  };
  seo: {
    metaTitle: string;
    metaDescription: string;
    canonicalOverride?: string;
    robotsDirective: 'index,follow' | 'noindex,nofollow' | 'noindex,follow';
  };
  status: 'draft' | 'published' | 'archived';
  readingTimeMinutes: number;
  publishedAt?: Date;
  updatedAt: Date;
  createdAt: Date;
}

const BlogPostMongooseSchema = new Schema<IBlogPost>(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, trim: true, index: true },
    excerpt: { type: String, required: true, trim: true },
    content: { type: String, required: true },
    author: {
      name: { type: String, required: true },
      role: { type: String, required: true },
      bio: { type: String, required: true },
      email: { type: String, trim: true },
      avatarUrl: { type: String },
    },
    category: {
      type: String,
      required: true,
      index: true,
      enum: [
        'Architecture & Engineering',
        'Technical SEO & Growth',
        'UI/UX & Design Systems',
        'Infrastructure & Security',
      ],
    },
    tags: [{ type: String, trim: true }],
    featuredImage: {
      url: { type: String },
      altText: { type: String },
    },
    seo: {
      metaTitle: { type: String, required: true },
      metaDescription: { type: String, required: true },
      canonicalOverride: { type: String },
      robotsDirective: {
        type: String,
        enum: ['index,follow', 'noindex,nofollow', 'noindex,follow'],
        default: 'index,follow',
      },
    },
    status: {
      type: String,
      enum: ['draft', 'published', 'archived'],
      default: 'draft',
      index: true,
    },
    readingTimeMinutes: { type: Number, default: 5 },
    publishedAt: { type: Date, index: true },
  },
  {
    timestamps: true,
  }
);

export const BlogPostModel =
  mongoose.models.BlogPost || mongoose.model<IBlogPost>('BlogPost', BlogPostMongooseSchema);
