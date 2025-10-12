import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent), title: 'AI Tools — Find the Best Tool' },
  { path: 'tools', loadComponent: () => import('./pages/tools/tools.component').then(m => m.ToolsComponent), title: 'Browse Tools' },
  { path: 'compare', loadComponent: () => import('./pages/compare/compare.component').then(m => m.CompareComponent), title: 'Compare Tools' },
  { path: 'compare-now', loadComponent: () => import('./pages/compare-now/compare-now.component').then(m => m.CompareNowComponent), title: 'Compare Now' },
  { path: 'favorites', loadComponent: () => import('./pages/favorites/favorites.component').then(m => m.FavoritesComponent), title: 'Favorites' },
{ path: 'blog', loadComponent: () => import('./pages/blog/blog.component').then(m => m.BlogComponent), title: 'Blog' },
{ path: 'blog/:slug', loadComponent: () => import('./pages/blog/blog-detail.component').then(m => m.BlogDetailComponent), title: 'Blog Article' },

  { path: 'about', loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent), title: 'About' },
  { path: 'contact', loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent), title: 'Contact' },
  { path: 'tool/:slug', loadComponent: () => import('./pages/tool-detail/tool-detail.component').then(m => m.ToolDetailComponent), title: 'Tool Details' },
  { path: '**', redirectTo: '' }
];
