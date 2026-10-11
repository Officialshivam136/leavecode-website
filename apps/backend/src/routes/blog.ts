import { Router, Request, Response, NextFunction } from 'express';
import { BlogPostSchema, BlogPostUpdateSchema } from '@leavecode/shared';
import { BlogPostModel, IBlogPost } from '../models/BlogPost.js';
import { requireAdminAuth, AuthenticatedRequest } from '../middleware/auth.js';
import { AppError } from '../middleware/errorHandler.js';

export const blogRouter = Router();

// In-memory fallback repository when MongoDB server is offline
export let inMemoryPosts: any[] = [
  {
    _id: 'post-1',
    title: 'Migrating from Legacy Monolithic WordPress to Next.js 14 Without Losing Organic Rankings',
    slug: 'migrating-wordpress-to-nextjs-without-losing-rankings',
    excerpt:
      'A comprehensive technical blueprint for auditing legacy URLs, preserving backlink equity with 301 edge redirects, and achieving sub-second LCP scores.',
    content: `## The Strategic Imperative: Beyond Monolithic CMS\n\nFor growing digital enterprises, monolithic CMS platforms like traditional WordPress frequently become bottlenecks. While WordPress powers millions of websites, high-traffic commercial platforms encounter compounding friction: bloated asset bundles, unpredictable plugin conflicts, and creeping Time to First Byte (TTFB).\n\nMigrating to Next.js 14 App Router unlocks server-rendered speed and zero-downtime reliability—but an uncalculated migration carries catastrophic SEO risks if existing URL equity is disregarded.\n\n### 1. The Pre-Migration 1:1 URL Inventory\n\nEvery migration must begin with an exhaustive crawl of the live environment. Using automated crawlers and search console sitemaps, catalog:\n\n- All active public 200 OK URLs.\n- Historical parameters and canonical tags.\n- High-traffic landing pages identified via Search Console.\n\n### 2. Edge-Level 301 Redirection Architecture\n\nNever rely on client-side JavaScript redirects for legacy URLs. Next.js middleware and edge configuration allow mapping legacy permalinks directly to modern kebab-case equivalents before page rendering begins. This ensures Googlebot receives an immediate 301 Moved Permanently status, transferring 100% of link equity without hop latency.\n\n### 3. Server-Rendered JSON-LD Structured Data\n\nModern search engines rely on clear entity attribution. In Next.js, Schema.org Organization, Service, and Article schemas can be server-rendered directly within the HTML payload, ensuring rich result eligibility on day one.\n\n### Conclusion\n\nDecoupled architecture is not merely an engineering aesthetic; it is a measurable commercial differentiator that accelerates organic conversion when built on strict migration principles.`,
    author: {
      name: 'LeaveCode Engineering Practice',
      role: 'Full-Stack Systems Architects',
      bio: 'Technical engineering leads specializing in decoupled Next.js architectures, distributed APIs, and technical SEO migrations.',
    },
    category: 'Architecture & Engineering',
    tags: ['Next.js 14', 'Technical SEO', 'WordPress Migration', 'Core Web Vitals'],
    seo: {
      metaTitle: 'Migrating WordPress to Next.js 14 Without Losing Rankings | LeaveCode',
      metaDescription:
        'Technical blueprint for auditing URLs, preserving backlink equity with 301 edge redirects, and achieving 100/100 Core Web Vitals on Next.js 14.',
      robotsDirective: 'index,follow',
    },
    status: 'published',
    readingTimeMinutes: 6,
    publishedAt: new Date('2026-10-01T10:00:00Z').toISOString(),
    createdAt: new Date('2026-10-01T09:00:00Z').toISOString(),
    updatedAt: new Date('2026-10-01T10:00:00Z').toISOString(),
  },
  {
    _id: 'post-2',
    title: 'Shared Zod Schemas in TypeScript Monorepos: Eliminating Validation Drift Between Frontend & Express',
    slug: 'shared-zod-schemas-typescript-monorepos',
    excerpt:
      'How authoring single-source validation contracts in a shared package guarantees type safety, eliminates form vulnerabilities, and simplifies API maintenance.',
    content: `## The Architecture Problem: Fragmented Data Contracts\n\nIn conventional multi-tier web applications, the frontend team frequently writes client-side validation logic while the backend team authors separate request sanitizers. Over time, requirements drift: a telephone format accepted by the client is rejected by the API, or an unvalidated field bypasses the server directly into the database.\n\nIn a unified TypeScript monorepo, this discrepancy can be eliminated entirely using shared Zod validation packages.\n\n### Single Source of Truth with @leavecode/shared\n\nBy encapsulating Zod schemas in an isolated monorepo workspace (e.g. \`packages/shared\`), both the Next.js React forms and the Node.js Express controllers import the exact same validation rules:\n\n\`\`\`typescript\nimport { InquirySchema, InquiryInput } from '@leavecode/shared';\n\`\`\`\n\n### Immediate Developer Experience Gains\n\n1. **Zero Type Duplication:** TypeScript interfaces are inferred directly from Zod using \`z.infer<typeof Schema>\`.\n2. **Unified Error Formatting:** A single centralized error middleware converts Zod issue trees into uniform JSON responses.\n3. **Refactoring Safety:** Modifying a field constraint automatically triggers compile-time TypeScript errors across all consuming applications.\n\n### Conclusion\n\nEnforcing shared schemas at the package boundary converts runtime surprises into compile-time certainties.`,
    author: {
      name: 'LeaveCode Engineering Practice',
      role: 'Full-Stack Systems Architects',
      bio: 'Technical engineering leads specializing in decoupled Next.js architectures, distributed APIs, and technical SEO migrations.',
    },
    category: 'Architecture & Engineering',
    tags: ['TypeScript', 'Zod', 'Monorepo', 'Express', 'Architecture'],
    seo: {
      metaTitle: 'Shared Zod Schemas in TypeScript Monorepos | LeaveCode Technologies',
      metaDescription:
        'How creating a cross-cutting shared package ensures end-to-end data integrity for contact forms, project calculators, and client portals.',
      robotsDirective: 'index,follow',
    },
    status: 'published',
    readingTimeMinutes: 5,
    publishedAt: new Date('2026-10-05T12:00:00Z').toISOString(),
    createdAt: new Date('2026-10-05T11:00:00Z').toISOString(),
    updatedAt: new Date('2026-10-05T12:00:00Z').toISOString(),
  },
  {
    _id: 'post-3',
    title: 'Draft Blueprint: Securing Microservices with Automated Dependency Patching',
    slug: 'draft-securing-microservices-automated-patching',
    excerpt: 'Internal draft detailing automated npm security audits, Snyk integration, and scheduled dependency patch pipelines.',
    content: `## Internal Working Draft - Not For Public Indexation\n\nThis is a draft article outlining our automated dependency patching pipeline and security procedures for Node.js production environments. Must remain in draft state until reviewed by engineering leadership.`,
    author: {
      name: 'LeaveCode Engineering Practice',
      role: 'Full-Stack Systems Architects',
      bio: 'Technical engineering leads specializing in decoupled Next.js architectures, distributed APIs, and technical SEO migrations.',
    },
    category: 'Infrastructure & Security',
    tags: ['Security', 'DevOps', 'Draft'],
    seo: {
      metaTitle: 'Draft Blueprint: Securing Microservices | LeaveCode',
      metaDescription: 'Internal draft detailing automated npm security audits and patch pipelines.',
      robotsDirective: 'noindex,nofollow',
    },
    status: 'draft',
    readingTimeMinutes: 3,
    createdAt: new Date('2026-10-10T09:00:00Z').toISOString(),
    updatedAt: new Date('2026-10-10T09:00:00Z').toISOString(),
  },
];

// Helper to check DB readiness
function isMongooseConnected(): boolean {
  try {
    return BlogPostModel.db?.readyState === 1;
  } catch {
    return false;
  }
}

// -----------------------------------------------------------------------------
// PUBLIC ENDPOINTS (Only published, indexable articles)
// -----------------------------------------------------------------------------

// GET /api/v1/posts - Public listing of published posts
blogRouter.get('/posts', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { category, tag } = req.query;

    if (isMongooseConnected()) {
      const totalCount = await BlogPostModel.countDocuments();
      if (totalCount > 0) {
        const query: any = { status: 'published' };
        if (category) query.category = category;
        if (tag) query.tags = tag;

        const posts = await BlogPostModel.find(query)
          .select('-content')
          .sort({ publishedAt: -1 })
          .lean();

        res.status(200).json({ success: true, count: posts.length, data: posts });
        return;
      }
    }

    // In-memory fallback
    let filtered = inMemoryPosts.filter((p) => p.status === 'published');
    if (category) filtered = filtered.filter((p) => p.category === category);
    if (tag) filtered = filtered.filter((p) => p.tags.includes(String(tag)));

    const summary = filtered.map(({ content, ...rest }) => rest);
    res.status(200).json({ success: true, count: summary.length, data: summary });
  } catch (error) {
    next(error);
  }
});

// GET /api/v1/posts/:slug - Public single post (Drafts return 404!)
blogRouter.get('/posts/:slug', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { slug } = req.params;

    if (isMongooseConnected()) {
      const post = await BlogPostModel.findOne({ slug, status: 'published' }).lean();
      if (!post) {
        throw new AppError(`Article '${slug}' not found or is currently private`, 404);
      }
      res.status(200).json({ success: true, data: post });
      return;
    }

    // In-memory fallback
    const post = inMemoryPosts.find((p) => p.slug === slug && p.status === 'published');
    if (!post) {
      throw new AppError(`Article '${slug}' not found or is currently private`, 404);
    }

    res.status(200).json({ success: true, data: post });
  } catch (error) {
    next(error);
  }
});

// -----------------------------------------------------------------------------
// PROTECTED ADMINISTRATIVE ENDPOINTS (Requires Admin JWT)
// -----------------------------------------------------------------------------

// GET /api/v1/admin/posts - List all posts (including drafts and archived)
blogRouter.get(
  '/admin/posts',
  requireAdminAuth,
  async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    try {
      if (isMongooseConnected()) {
        const posts = await BlogPostModel.find().sort({ updatedAt: -1 }).lean();
        res.status(200).json({ success: true, count: posts.length, data: posts });
        return;
      }
      res.status(200).json({ success: true, count: inMemoryPosts.length, data: inMemoryPosts });
    } catch (error) {
      next(error);
    }
  }
);

// GET /api/v1/admin/posts/:id/preview - Preview any post including drafts
blogRouter.get(
  '/admin/posts/:id/preview',
  requireAdminAuth,
  async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      if (isMongooseConnected()) {
        const post = await BlogPostModel.findById(id).lean();
        if (!post) throw new AppError('Post not found', 404);
        res.status(200).json({ success: true, data: post });
        return;
      }
      const post = inMemoryPosts.find((p) => p._id === id || p.slug === id);
      if (!post) throw new AppError('Post not found', 404);
      res.status(200).json({ success: true, data: post });
    } catch (error) {
      next(error);
    }
  }
);

// POST /api/v1/admin/posts - Create new post
blogRouter.post(
  '/admin/posts',
  requireAdminAuth,
  async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    try {
      const validated = BlogPostSchema.parse(req.body);

      if (validated.status === 'published' && !validated.publishedAt) {
        validated.publishedAt = new Date().toISOString();
      }

      if (isMongooseConnected()) {
        const exists = await BlogPostModel.findOne({ slug: validated.slug });
        if (exists) throw new AppError('A post with this slug already exists', 409);

        const newPost = await BlogPostModel.create(validated);
        res.status(201).json({ success: true, message: 'Article created', data: newPost });
        return;
      }

      // In-memory fallback
      const exists = inMemoryPosts.some((p) => p.slug === validated.slug);
      if (exists) throw new AppError('A post with this slug already exists', 409);

      const newPost = {
        _id: `post-${Date.now()}`,
        ...validated,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      inMemoryPosts.push(newPost);

      res.status(201).json({ success: true, message: 'Article created', data: newPost });
    } catch (error) {
      next(error);
    }
  }
);

// PUT /api/v1/admin/posts/:id - Edit existing post
blogRouter.put(
  '/admin/posts/:id',
  requireAdminAuth,
  async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const validated = BlogPostUpdateSchema.parse(req.body);

      if (isMongooseConnected()) {
        const updated = await BlogPostModel.findByIdAndUpdate(
          id,
          { ...validated, updatedAt: new Date() },
          { new: true, runValidators: true }
        );
        if (!updated) throw new AppError('Post not found', 404);
        res.status(200).json({ success: true, message: 'Article updated', data: updated });
        return;
      }

      const idx = inMemoryPosts.findIndex((p) => p._id === id || p.slug === id);
      if (idx === -1) throw new AppError('Post not found', 404);

      inMemoryPosts[idx] = {
        ...inMemoryPosts[idx],
        ...validated,
        updatedAt: new Date().toISOString(),
      };

      res.status(200).json({ success: true, message: 'Article updated', data: inMemoryPosts[idx] });
    } catch (error) {
      next(error);
    }
  }
);

// PATCH /api/v1/admin/posts/:id/publish - Publish or unpublish post
blogRouter.patch(
  '/admin/posts/:id/publish',
  requireAdminAuth,
  async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const { status } = req.body;

      if (!['draft', 'published', 'archived'].includes(status)) {
        throw new AppError('Invalid status. Must be draft, published, or archived', 400);
      }

      const updateData: any = {
        status,
        updatedAt: new Date(),
      };
      if (status === 'published') {
        updateData.publishedAt = new Date();
      }

      if (isMongooseConnected()) {
        const updated = await BlogPostModel.findByIdAndUpdate(id, updateData, { new: true });
        if (!updated) throw new AppError('Post not found', 404);
        res.status(200).json({ success: true, message: `Article status set to ${status}`, data: updated });
        return;
      }

      const idx = inMemoryPosts.findIndex((p) => p._id === id || p.slug === id);
      if (idx === -1) throw new AppError('Post not found', 404);

      inMemoryPosts[idx] = {
        ...inMemoryPosts[idx],
        ...updateData,
      };

      res.status(200).json({ success: true, message: `Article status set to ${status}`, data: inMemoryPosts[idx] });
    } catch (error) {
      next(error);
    }
  }
);

// DELETE /api/v1/admin/posts/:id - Delete post
blogRouter.delete(
  '/admin/posts/:id',
  requireAdminAuth,
  async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      if (isMongooseConnected()) {
        const deleted = await BlogPostModel.findByIdAndDelete(id);
        if (!deleted) throw new AppError('Post not found', 404);
        res.status(200).json({ success: true, message: 'Article deleted successfully' });
        return;
      }

      const idx = inMemoryPosts.findIndex((p) => p._id === id || p.slug === id);
      if (idx === -1) throw new AppError('Post not found', 404);

      inMemoryPosts.splice(idx, 1);
      res.status(200).json({ success: true, message: 'Article deleted successfully' });
    } catch (error) {
      next(error);
    }
  }
);
