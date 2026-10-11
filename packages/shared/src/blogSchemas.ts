import { z } from 'zod';

export const PostCategoryEnum = z.enum([
  'Architecture & Engineering',
  'Technical SEO & Growth',
  'UI/UX & Design Systems',
  'Infrastructure & Security'
]);

export const PostStatusEnum = z.enum(['draft', 'published', 'archived']);

export const RobotsDirectiveEnum = z.enum(['index,follow', 'noindex,nofollow', 'noindex,follow']).default('index,follow');

export const BlogPostSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters').max(200),
  slug: z.string().min(3).max(200).regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Slug must be URL-safe (kebab-case)'),
  excerpt: z.string().min(20, 'Excerpt must be at least 20 characters').max(500),
  content: z.string().min(100, 'Article body must be at least 100 characters'),
  author: z.object({
    name: z.string().min(2),
    role: z.string().min(2),
    bio: z.string().min(10),
    email: z.string().email().optional(),
    avatarUrl: z.string().optional()
  }),
  category: PostCategoryEnum,
  tags: z.array(z.string()).min(1, 'At least one tag is required'),
  featuredImage: z.object({
    url: z.string(),
    altText: z.string().min(5, 'Alt text is required for accessibility and SEO')
  }).optional(),
  seo: z.object({
    metaTitle: z.string().min(10).max(70),
    metaDescription: z.string().min(50).max(160),
    canonicalOverride: z.string().url().optional(),
    robotsDirective: RobotsDirectiveEnum
  }),
  status: PostStatusEnum.default('draft'),
  readingTimeMinutes: z.number().int().positive().default(5),
  publishedAt: z.string().datetime().optional(),
  updatedAt: z.string().datetime().optional()
});

export type BlogPostInput = z.infer<typeof BlogPostSchema>;

export const BlogPostUpdateSchema = BlogPostSchema.partial();
export type BlogPostUpdateInput = z.infer<typeof BlogPostUpdateSchema>;

export const AdminLoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, 'Password must be at least 8 characters')
});

export type AdminLoginInput = z.infer<typeof AdminLoginSchema>;
