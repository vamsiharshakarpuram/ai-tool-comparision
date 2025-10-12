export type ToolCategory =
  'Text AI' | 'Image AI' | 'Video AI' | 'Code AI' | 'Productivity AI' | 'Voice AI';

export interface Tool {
  id: string;
  name: string;
  slug: string;
  category: ToolCategory;
  shortDescription: string;
  description: string;
  pricing: 'Free' | 'Freemium' | 'Paid';
  priceRange?: string;
  rating: number; // 1–5
  pros: string[];
  cons: string[];
  website: string;
  logo: string;
  tags: string[];
  hasFreeTrial?: boolean;
  apiAvailable?: boolean;

  // --- New, all optional so old data won’t break ---
  platforms?: string[];            // ['Web','Desktop','iOS','Android','Extension']
  integrations?: string[];         // ['Zapier','Slack','Notion','Google Drive', ...]
  exportFormats?: string[];        // ['CSV','PDF','JSON','PNG', ...]
  languagesSupported?: number;     // how many UI languages
  learningCurve?: 'Beginner' | 'Intermediate' | 'Advanced';
  onboardingTimeMins?: number;     // typical time to first value
  docsQuality?: 1 | 2 | 3 | 4 | 5; // internal rubric
  supportChannels?: string[];      // ['Email','Chat','Community','Phone']
  supportSLA?: string;             // e.g. '24h standard, 4h premium'
  roadmapTransparency?: boolean;   // public roadmap?
  communitySize?: string;          // 'Large', 'Medium', 'Small'
  updateFrequency?: 'Weekly' | 'Monthly' | 'Quarterly' | 'Rare';
  accuracyOrQualityScore?: number; // 0–100 (benchmarks, internal testing)
  latencyClaimMs?: number;         // avg response latency if relevant
  usageLimits?: string;            // '200 images/mo on Pro', etc.
  rateLimits?: string;             // '60 req/min', etc.
  security?: string[];             // ['SOC2','ISO27001','GDPR','HIPAA']
  dataOwnership?: string;          // 'User retains; can export/delete'
  storesUserData?: boolean;        // at rest
  piiPolicy?: string;              // short privacy stance summary
  offlineMode?: boolean;           // any offline capability
}
