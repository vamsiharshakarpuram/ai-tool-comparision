import { Injectable, signal, computed } from '@angular/core';
import { Tool } from '../models/tool';

@Injectable({ providedIn: 'root' })
export class ToolService {
  private _tools = signal<Tool[]>([]);
  private _favorites = signal<Set<string>>(new Set());
  private _compare = signal<Set<string>>(new Set());

  tools = computed(() => this._tools());
  favorites = computed(() => this._favorites());
  compareList = computed(() => this._compare());

  constructor() {
    const fav = localStorage.getItem('favorites');
    const cmp = localStorage.getItem('compare');
    if (fav) this._favorites.set(new Set(JSON.parse(fav)));
    if (cmp) this._compare.set(new Set(JSON.parse(cmp)));

    // Load tools from assets
    fetch('assets/data/tools.json')
      .then(r => r.json())
      .then((data: Tool[]) => this._tools.set(data))
      .catch(err => console.error('Failed to load tools.json', err));
  }

  getBySlug(slug: string): Tool | undefined {
    return this._tools().find(t => t.slug === slug);
  }

  toggleFavorite(id: string) {
    const set = new Set(this._favorites());
    set.has(id) ? set.delete(id) : set.add(id);
    this._favorites.set(set);
    localStorage.setItem('favorites', JSON.stringify(Array.from(set)));
  }

  toggleCompare(id: string) {
    const set = new Set(this._compare());
    if (set.has(id)) set.delete(id)
    else {
      if (set.size >= 4) { alert('You can compare up to 4 tools.'); return; }
      set.add(id);
    }
    this._compare.set(set);
    localStorage.setItem('compare', JSON.stringify(Array.from(set)));
  }

  clearCompare() {
    this._compare.set(new Set());
    localStorage.setItem('compare', JSON.stringify([]));
  }
}
