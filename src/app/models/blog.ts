export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  author: string;
  publishedAt: string; // ISO date
  updatedAt: string;   // ISO date
  category: string;
  tags: string[];
  readMinutes: number;
  heroImage: string;
  excerpt: string;
  contentHtml: string; // pre-sanitized article body as HTML
}
