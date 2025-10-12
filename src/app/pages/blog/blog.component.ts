import { Component, computed, signal } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BlogPost } from '../../models/blog';
import { BlogService } from 'src/app/services/log.service';

@Component({
  standalone: true,
  selector: 'app-blog',
  imports: [NgFor, NgIf, RouterLink],
  styles: [`
    :host { display:block; }
    .wrap { max-width: 1100px; margin: 0 auto; padding: 16px; }
    .head { display:flex; justify-content:space-between; align-items:center; gap:12px; margin-bottom: 14px; }
    .title { font-size:28px; font-weight:800; letter-spacing:-0.3px; }
    .filters { display:flex; gap:10px; flex-wrap:wrap; align-items:center; }
    .input { border:1px solid #e3e6ec; border-radius:10px; padding:8px 10px; font-size:14px; min-width: 220px; }
    .select { border:1px solid #e3e6ec; border-radius:10px; padding:8px 10px; font-size:14px; }
    .tags { display:flex; gap:8px; flex-wrap:wrap; }
    .tag { font-size:12px; padding:5px 9px; border:1px solid #e3e6ec; border-radius:999px; background:#fff; cursor:pointer; }
    .tag.active { background:#eef0ff; color:#5148ff; border-color:#dfe2fe; }
    .grid { display:grid; gap:16px; grid-template-columns: repeat(1, minmax(0,1fr)); margin-top: 14px; }
    @media (min-width:800px) { .grid { grid-template-columns: repeat(2, minmax(0,1fr)); } }
    .card { border:1px solid #e6e8eb; border-radius:16px; background:#fff; overflow:hidden; display:flex; flex-direction:column; }
    .hero { height: 160px; background:#f6f7fb; display:flex; align-items:center; justify-content:center; overflow:hidden; }
    .hero img { width:100%; height:100%; object-fit:cover; }
    .body { padding:14px; display:flex; flex-direction:column; gap:8px; }
    .post-title { font-weight:800; font-size:18px; color:#0f172a; text-decoration:none; }
    .post-title:hover { text-decoration:underline; }
    .meta { font-size:12px; color:#6b7280; display:flex; gap:8px; flex-wrap:wrap; }
    .excerpt { color:#3b4150; font-size:14px; }
    .pill { font-size:11px; padding:4px 8px; border-radius:999px; background:#eef0ff; color:#5148ff; border:1px solid #dfe2fe; }
    .empty { border:1px solid #e6e8eb; border-radius:16px; padding:28px; text-align:center; color:#667085; background:#fff; }
  `],
  template: `
    <div class="wrap">
      <div class="head">
        <h1 class="title">Blog</h1>
        <div class="filters">
          <input class="input" type="search" placeholder="Search posts…" (input)="setQuery($any($event.target).value)" />
          <select class="select" (change)="setCategory($any($event.target).value)">
            <option value="">All Categories</option>
            <option *ngFor="let c of categories()" [value]="c">{{c}}</option>
          </select>
        </div>
      </div>

      <div class="tags" *ngIf="allTags().length">
        <button class="tag" [class.active]="hasTag(t)" *ngFor="let t of allTags()" (click)="toggleTag(t)">{{t}}</button>
      </div>

      <div class="grid">
        <ng-container *ngIf="filtered().length; else empty">
          <article *ngFor="let p of filtered()" class="card">
            <a [routerLink]="['/blog', p.slug]" class="hero" aria-label="{{p.title}}">
              <img *ngIf="p.heroImage" [src]="p.heroImage" [alt]="p.title" />
            </a>
            <div class="body">
              <a [routerLink]="['/blog', p.slug]" class="post-title">{{p.title}}</a>
              <div class="meta">
                <span>{{p.author}}</span>
                <span>•</span>
                <span>{{p.readMinutes}} min read</span>
                <span>•</span>
                <span>{{p.publishedAt}}</span>
              </div>
              <p class="excerpt">{{p.excerpt}}</p>
              <div class="meta">
                <span class="pill">{{p.category}}</span>
                <span *ngFor="let t of p.tags" class="pill">{{t}}</span>
              </div>
            </div>
          </article>
        </ng-container>
        <ng-template #empty>
          <div class="empty">No posts found. Try different filters or search terms.</div>
        </ng-template>
      </div>
    </div>
  `
})
export class BlogComponent {
  query = signal('');
  category = signal('');
  activeTags = signal<Set<string>>(new Set());

  constructor(private blog: BlogService) {}

  categories = () => this.blog.getCategories();
  allTags = () => this.blog.getAllTags();

  setQuery(v: string) { this.query.set(v.trim().toLowerCase()); }
  setCategory(v: string) { this.category.set(v); }
  hasTag(t: string) { return this.activeTags().has(t); }
  toggleTag(t: string) {
    const s = new Set(this.activeTags());
    s.has(t) ? s.delete(t) : s.add(t);
    this.activeTags.set(s);
  }

  filtered = computed(() => {
    const q = this.query();
    const c = this.category();
    const tags = this.activeTags();
    return this.blog.posts().filter((p: BlogPost) => {
      const inCat = !c || p.category === c;
      const inQuery = !q || [p.title, p.subtitle, p.excerpt, ...(p.tags||[])].join(' ').toLowerCase().includes(q);
      const inTags = !tags.size || (p.tags || []).some(t => tags.has(t));
      return inCat && inQuery && inTags;
    });
  });
}
