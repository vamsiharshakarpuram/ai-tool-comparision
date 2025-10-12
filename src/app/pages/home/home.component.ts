import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [RouterLink],
  template: `
    <section class="text-center py-10 md:py-16">
      <div class="mx-auto max-w-3xl">
        <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight">
          Find the <span class="text-brand-600">Best AI Tool</span> for Your Needs in Minutes
        </h1>
        <p class="mt-4 text-lg text-slate-600">
          Honest reviews, side-by-side comparisons, and plain-English explanations.
        </p>
        <div class="mt-6 flex items-center justify-center gap-4">
          <a routerLink="/tools" class="btn-primary">Compare Tools Now</a>
          <a routerLink="/blog" class="btn-secondary">Read Guides</a>
        </div>
        <div class="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-slate-600">
          <div class="card">Trusted by <span class="font-semibold">10,000+</span> users</div>
          <div class="card">500+ tools indexed</div>
          <div class="card">No jargon, just clarity</div>
          <div class="card">Real pros & cons</div>
        </div>
      </div>
    </section>

    <section class="mt-10">
      <h2 class="text-xl font-semibold mb-4">Popular Categories</h2>
      <div class="grid-auto">
        <a routerLink="/tools" class="card hover:ring-brand-200 hover:shadow-md">Text AI</a>
        <a routerLink="/tools" class="card hover:ring-brand-200 hover:shadow-md">Image AI</a>
        <a routerLink="/tools" class="card hover:ring-brand-200 hover:shadow-md">Video AI</a>
        <a routerLink="/tools" class="card hover:ring-brand-200 hover:shadow-md">Code AI</a>
        <a routerLink="/tools" class="card hover:ring-brand-200 hover:shadow-md">Productivity AI</a>
        <a routerLink="/tools" class="card hover:ring-brand-200 hover:shadow-md">Voice AI</a>
      </div>
    </section>
  `
})
export class HomeComponent {}
