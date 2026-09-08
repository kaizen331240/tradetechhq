import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    author: z.string(),
    authorRole: z.string().optional().default('Systems Research Architect, TradeTechHQ Labs'),
    score: z.number(),
    category: z.string(),
    summary: z.string(),
    vendorUrl: z.string().url(),
    badge: z.string().optional(),
    platformCode: z.string().optional(),
    auditsCount: z.number().optional().default(120),
    recommendedFor: z.string().optional(),
    readTime: z.string().optional().default('12 min read'),
    featuredImage: z.string().optional(),
    featuredImageAlt: z.string().optional(),
    pricing: z.string().optional(),
    pricingSub: z.string().optional(),
    pricingTier: z.string().optional(),
    pros: z.array(z.string()).optional().default([]),
    cons: z.array(z.string()).optional().default([]),
    specs: z.object({
      sweetSpotFleet: z.string().optional(),
      implementation: z.string().optional(),
      erpSync: z.string().optional(),
      basePricing: z.string().optional()
    }).optional(),
    features: z.array(z.string()).optional().default([]),
    telemetryLatency: z.string().optional(),
    offlineReliability: z.string().optional(),
    featured: z.boolean().optional().default(false),
  }),
});

export const collections = {
  blog: blogCollection,
};
