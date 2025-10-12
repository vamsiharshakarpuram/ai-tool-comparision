import { Injectable, signal, computed } from '@angular/core';
import { BlogPost } from '../models/blog';

@Injectable({ providedIn: 'root' })
export class BlogService {
  private _posts = signal<BlogPost[]>([]);
  posts = computed(() => this._posts());

  constructor() {
    fetch('assets/data/blog-posts.json')
      .then(r => r.json())
      .then((data: BlogPost[]) => this._posts.set(data))
      .catch(err => console.error('Failed to load blog-posts.json', err));
  }

  getBySlug(slug: string): BlogPost | undefined {
    return this._posts().find(p => p.slug === slug);
  }

  getCategories(): string[] {
    return Array.from(new Set(this._posts().map(p => p.category))).sort();
  }

  getAllTags(): string[] {
    return Array.from(new Set(this._posts().flatMap(p => p.tags || []))).sort();
  }
}
