import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgIf],
  template: `
    <header class="border-b bg-white sticky top-0 z-50">
      <div class="container">
        <div class="flex items-center justify-between py-4">
          <a routerLink="/" class="flex items-center gap-2 font-semibold text-lg">
            <span class="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-brand-600 text-white">AI</span>
            Tools Compare
          </a>
          <nav class="hidden md:flex items-center gap-6">
            <a routerLink="/tools" class="hover:text-brand-700">Tools</a>
            <a routerLink="/compare" class="hover:text-brand-700">Compare</a>
            <a routerLink="/favorites" class="hover:text-brand-700">Favorites</a>
            <a routerLink="/blog" class="hover:text-brand-700">Blog</a>
            <a routerLink="/about" class="hover:text-brand-700">About</a>
            <a routerLink="/contact" class="hover:text-brand-700">Contact</a>
          </nav>
          <a routerLink="/tools" class="btn-primary">Compare Tools Now</a>
        </div>
      </div>
    </header>

    <main class="container py-8">
      <router-outlet></router-outlet>
    </main>

    <footer class="mt-16 border-t">
      <div class="container py-8 text-sm text-slate-600">
        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {{year}} AI Tools Compare. All rights reserved.</p>
          <div class="flex items-center gap-4">
            <a class="hover:text-brand-700" routerLink="/about">About</a>
            <a class="hover:text-brand-700" routerLink="/contact">Contact</a>
            <a class="hover:text-brand-700" href="#">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class AppComponent {
  year = new Date().getFullYear();
}
