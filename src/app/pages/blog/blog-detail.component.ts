import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChild,
  HostListener,
  signal
} from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BlogPost } from '../../models/blog';
import { BlogService } from 'src/app/services/log.service';

interface TocItem {
  id: string;
  text: string;
  level: 2 | 3;
}

@Component({
  standalone: true,
  selector: 'app-blog-detail',
  imports: [NgIf, NgFor, RouterLink],
  styles: [`
    :host { display:block; --brand:#5b56ff; --ink:#0f1223; --muted:#6b7280; --paper:#ffffff; --edge:#e6e8eb; }

    /* Progress bar */
    .progress {
      position: fixed; inset: 0 auto auto 0; height: 3px; width: var(--w,0%);
      background: linear-gradient(90deg, var(--brand), #9a8cff);
      z-index: 1000;
      box-shadow: 0 0 10px rgba(91,86,255,.35);
    }

    /* Hero */
    .hero-wrap {
      position: relative;
      height: clamp(240px, 30vh, 420px);
      display:flex; align-items:flex-end; overflow:hidden;
      background: #0e0f19;
      border-bottom: 1px solid var(--edge);
    }
    .hero-img {
      position:absolute; inset:0;
      width:100%; height:100%; object-fit: cover; filter: saturate(1.1) contrast(1.05);
      transform: scale(1.02);
    }
    .hero-overlay {
      position:absolute; inset:0;
      background:
        radial-gradient(80% 60% at 50% 100%, rgba(14,16,30,0.0) 0%, rgba(14,16,30,0.60) 60%, rgba(14,16,30,0.85) 100%),
        linear-gradient(180deg, rgba(10,11,20,0.10) 0%, rgba(10,11,20,0.55) 100%);
      backdrop-filter: blur(2px);
    }
    .hero-inner {
      position:relative; z-index:1; width:100%;
      max-width: 980px; margin: 0 auto; padding: 24px 16px;
      color: #f7f7ff;
    }
    .kicker { font-size:13px; letter-spacing:.12em; text-transform:uppercase; opacity:.8; }
    .title {
      margin:6px 0 4px; font-size: clamp(28px, 5.2vw, 48px);
      line-height:1.05; font-weight:900; letter-spacing:-0.02em;
      text-shadow: 0 4px 28px rgba(0,0,0,.45);
    }
    .subtitle { color: #ccd0ff; max-width: 70ch; }

    /* Top controls */
    .toolbar {
      position: sticky; top: 0; z-index: 999;
      background: rgba(255,255,255,.85); backdrop-filter: blur(10px);
      border-bottom: 1px solid var(--edge);
    }
    .toolbar-inner {
      max-width: 980px; margin: 0 auto; padding: 8px 16px;
      display:flex; align-items:center; justify-content:space-between; gap:12px;
    }
    .back { color: var(--brand); text-decoration: none; font-weight: 700; }
    .btns { display:flex; gap:8px; flex-wrap: wrap; }
    .btn {
      border:1px solid #dfe2ea; background:#fff; border-radius:10px;
      padding:8px 10px; font-size:14px; color:#1b2330; cursor:pointer;
    }
    .btn:hover { background:#f7f8fb; }

    /* Layout */
    .wrap { max-width: 980px; margin: 0 auto; padding: 16px; }
    .grid {
      display:grid; grid-template-columns: 1fr; gap: 24px;
    }
    @media (min-width: 1020px) {
      .grid { grid-template-columns: 230px 1fr; }
      .toc { position: sticky; top: 72px; align-self: start; }
    }

    /* TOC */
    .toc {
      border:1px solid var(--edge); border-radius:16px; padding:12px; background: #fff;
    }
    .toc h3 { margin: 0 0 8px; font-size:13px; letter-spacing:.08em; text-transform:uppercase; color:#7a8191; }
    .toc a {
      display:block; color:#111527; text-decoration:none; font-size:14px; padding: 6px 8px; border-radius:8px;
    }
    .toc a:hover { background:#f5f6fc; }
    .toc .h3 { padding-left: 20px; font-size:13px; color:#5b6371; }

    /* Article */
    .meta {
      font-size: 13px; color:#6b7280; display:flex; gap:8px; flex-wrap:wrap; margin: 10px 0 18px;
    }
    .content {
      background:#fff; border:1px solid var(--edge); border-radius: 16px; padding: clamp(16px, 3.5vw, 28px);
      box-shadow: 0 16px 50px rgba(15,18,35,.04);
    }
    .content > p:first-of-type::first-letter {
      float:left; font-size: 3.4rem; line-height: .8; padding-right: .15em; padding-top:.06em;
      color: var(--brand); font-weight: 900;
    }
    .content h2 { margin: 22px 0 8px; font-size: 24px; line-height:1.2; }
    .content h3 { margin: 18px 0 6px; font-size: 18px; line-height:1.3; color:#20263a; }
    .content p { line-height: 1.7; color: #1e2635; }
    .content ul, .content ol { padding-left: 22px; }
    .content li { margin: 6px 0; }

    /* Callouts / quotes / code */
    .callout {
      border-left: 4px solid var(--brand);
      background: #f7f8ff; padding: 12px 12px; border-radius: 10px; margin: 14px 0;
      color:#1d2440;
    }
    blockquote {
      margin: 18px 0; padding: 12px 16px; background: #0f1223; color:#eaeafe;
      border-radius: 14px; border:1px solid #24284a;
      font-size: 18px; line-height:1.5; font-weight:600;
    }
    pre, code {
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    }
    pre {
      background: #0c0f1d; color:#e5eaff; border:1px solid #232741; border-radius: 12px;
      padding: 12px 14px; overflow:auto; margin: 14px 0;
    }
    code { background: #f2f4f8; color:#222944; padding: 2px 6px; border-radius:6px; }

    /* Figures */
    figure { margin: 16px 0; }
    figure img {
      width:100%; border-radius: 14px; border:1px solid var(--edge); cursor: zoom-in;
      transition: transform .25s ease, box-shadow .25s ease;
    }
    figure img:hover { transform: translateY(-2px); box-shadow: 0 24px 60px rgba(16,24,40,.18); }
    figcaption { font-size:12px; color:#6b7280; margin-top:8px; text-align:center; }

    /* Footer nav */
    .post-nav {
      display:flex; justify-content:space-between; gap: 10px; margin: 22px 0;
    }
    .post-nav a {
      flex:1; text-decoration:none; color:#0c1430; border:1px solid var(--edge); background:#fff;
      border-radius:12px; padding: 12px; min-height: 64px; display:flex; align-items:center; justify-content:center;
    }
    .post-nav a:hover { background:#f7f8fb; }

    /* Mobile TOC toggle */
    .toc-toggle {
      display:none;
      border:1px solid #dfe2ea; background:#fff; border-radius:10px; padding:8px 10px; font-size:14px; cursor:pointer;
      margin-bottom: 10px;
    }
    @media (max-width: 1019px) {
      .toc-toggle { display:inline-flex; }
    }
  `],
  template: `
    <!-- Progress bar -->
    <div class="progress" [style.--w.%]="progress()"></div>

    <!-- Hero -->
    <section class="hero-wrap" *ngIf="post">
      <img *ngIf="post.heroImage" [src]="post.heroImage" [alt]="post.title" class="hero-img" />
      <div class="hero-overlay"></div>
      <div class="hero-inner">
        <div class="kicker">{{ post.category }}</div>
        <h1 class="title">{{ post.title }}</h1>
        <p class="subtitle">{{ post.subtitle }}</p>
      </div>
    </section>

    <!-- Sticky toolbar -->
    <div class="toolbar" *ngIf="post">
      <div class="toolbar-inner">
        <a routerLink="/blog" class="back">← Back to Blog</a>
        <div class="btns">
          <button class="btn" (click)="share()">Share</button>
          <button class="btn" (click)="print()">Print</button>
          <button class="btn" (click)="zoom('down')">A-</button>
          <button class="btn" (click)="zoom('up')">A+</button>
          <button class="btn" (click)="toggleSerif()">{{ serif() ? 'Sans' : 'Serif' }}</button>
          <button class="btn" (click)="toggleToc()">{{ showToc() ? 'Hide TOC' : 'Show TOC' }}</button>
        </div>
      </div>
    </div>

    <!-- Body -->
    <div class="wrap" *ngIf="post">
      <div class="grid">
        <!-- TOC -->
        <aside class="toc" *ngIf="(showToc() || wideToc()) && toc().length">
          <h3>In this article</h3>
          <nav>
            <a *ngFor="let i of toc()" [class.h3]="i.level===3" (click)="jump(i.id)">{{ i.text }}</a>
          </nav>
        </aside>

        <!-- Article -->
        <section>
          <div class="meta">
            <span>{{post.author}}</span>
            <span>•</span>
            <span>{{post.readMinutes}} min read</span>
            <span>•</span>
            <span>Published {{post.publishedAt}}</span>
            <span *ngIf="post.updatedAt && post.updatedAt !== post.publishedAt">• Updated {{post.updatedAt}}</span>
          </div>

          <!-- Content -->
          <article #contentRef class="content" [ngStyle]="{'font-family': serif() ? 'Georgia, Cambria, Times New Roman, Times, serif' : 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica, Arial, sans-serif', 'font-size.px': fontSize()}">
            <!-- You can embed callouts/figures/code inside contentHtml -->
            <div [innerHTML]="post.contentHtml"></div>
          </article>

          <!-- Prev/Next -->
          <div class="post-nav" *ngIf="prevPost || nextPost">
            <a *ngIf="prevPost" [routerLink]="['/blog', prevPost!.slug]">← {{ prevPost!.title }}</a>
            <a *ngIf="nextPost" [routerLink]="['/blog', nextPost!.slug]">{{ nextPost!.title }} →</a>
          </div>
        </section>
      </div>
    </div>
  `
})
export class BlogDetailComponent implements OnInit, AfterViewInit {
  post: BlogPost | undefined;
  prevPost?: BlogPost;
  nextPost?: BlogPost;

  @ViewChild('contentRef') contentRef!: ElementRef<HTMLElement>;

  // UI state
  progress = signal(0);
  serif = signal(false);
  fontSize = signal(16);
  showToc = signal(false);
  wideToc = signal<boolean>(typeof window !== 'undefined' && window.innerWidth >= 1020);

  // TOC data
  toc = signal<TocItem[]>([]);

  constructor(private route: ActivatedRoute, private blog: BlogService) {}

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug')!;
    this.post = this.blog.getBySlug(slug);

    // prev/next using the service list (if available)
    const posts = this.blog.posts ? this.blog.posts() : [];
    const idx = posts.findIndex(p => p.slug === slug);
    if (idx > -1) {
      this.prevPost = posts[idx - 1];
      this.nextPost = posts[idx + 1];
    }
  }

  ngAfterViewInit() {
    // Wait for [innerHTML] to render
    setTimeout(() => {
      this.buildToc();
      this.decorateContent();
      this.updateProgress();
    });
  }

  /* --------- UX actions --------- */
  @HostListener('window:scroll')
  onScroll() { this.updateProgress(); }

  @HostListener('window:resize')
  onResize() { this.wideToc.set(window.innerWidth >= 1020); }

  updateProgress() {
    const el = this.contentRef?.nativeElement;
    if (!el) { this.progress.set(0); return; }
    const rect = el.getBoundingClientRect();
    const total = rect.height - window.innerHeight;
    const passed = Math.min(Math.max(-rect.top, 0), Math.max(total, 1));
    const pct = Math.round((passed / Math.max(total, 1)) * 100);
    this.progress.set(pct);
  }

  zoom(direction: 'up'|'down') {
    const delta = direction === 'up' ? 1 : -1;
    const next = Math.min(22, Math.max(14, this.fontSize() + delta));
    this.fontSize.set(next);
  }

  toggleSerif() { this.serif.set(!this.serif()); }

  toggleToc() { this.showToc.set(!this.showToc()); }

  async share() {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    try {
      if ((navigator as any).share) {
        await (navigator as any).share({ title: this.post?.title, text: this.post?.subtitle, url });
      } else {
        await navigator.clipboard.writeText(url);
        alert('Link copied to clipboard!');
      }
    } catch { /* noop */ }
  }

  print() { if (typeof window !== 'undefined') window.print(); }

  jump(id: string) {
    const el = this.contentRef.nativeElement.querySelector('#'+CSS.escape(id));
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  /* --------- content enhancement --------- */
  buildToc() {
    if (!this.contentRef) return;
    const root = this.contentRef.nativeElement;
    const headers = Array.from(root.querySelectorAll('h2, h3')) as HTMLElement[];
    const items: TocItem[] = [];
    headers.forEach((h, i) => {
      const level = (h.tagName.toLowerCase() === 'h2') ? 2 : 3;
      if (!h.id) h.id = `${level === 2 ? 'sec' : 'sub'}-${i}-${(h.textContent||'').toLowerCase().replace(/[^a-z0-9]+/g,'-')}`;
      items.push({ id: h.id, text: h.textContent || 'Section', level: level as 2|3 });
    });
    this.toc.set(items);
  }

  decorateContent() {
    const root = this.contentRef.nativeElement;

    // Make <img> inside content act like figures
    root.querySelectorAll('img').forEach(img => {
      if (img.closest('figure')) return;
      const figure = document.createElement('figure');
      img.replaceWith(figure);
      figure.appendChild(img);
    });

    // Simple "callout" if author puts <p class="callout">…</p> in content
    // (Already styled via CSS.)

    // Add anchor links to headings
    root.querySelectorAll('h2,h3').forEach(h => {
      if (!h.id) return;
      const link = document.createElement('a');
      link.href = `#${h.id}`;
      link.textContent = ' ¶';
      link.style.marginLeft = '6px';
      link.style.textDecoration = 'none';
      link.style.color = '#9aa0b4';
      h.appendChild(link);
    });
  }
}
