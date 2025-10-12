import { Component, computed } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ToolService } from '../../services/tool.service';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-favorites',
  imports: [NgFor, NgIf, RouterLink],
  template: `
    <h1 class="text-2xl font-bold mb-4">Favorites</h1>
    <div class="grid-auto" *ngIf="favTools().length; else empty">
      <a class="card hover:ring-brand-200" *ngFor="let t of favTools()" [routerLink]="['/tool', t.slug]">
        <div class="flex items-center gap-3">
          <img [src]="t.logo" class="h-10 w-10 rounded-md ring-1 ring-slate-200 object-cover" alt="">
          <div>
            <div class="font-semibold">{{t.name}}</div>
            <div class="text-xs text-slate-600">{{t.category}}</div>
          </div>
        </div>
      </a>
    </div>
    <ng-template #empty>
      <div class="card">You haven’t saved any tools yet.</div>
    </ng-template>
  `
})
export class FavoritesComponent {
  favTools = computed(() => {
    const ids = Array.from(this.svc.favorites());
    return this.svc.tools().filter(t => ids.includes(t.id));
  });
  constructor(private svc: ToolService) {}
}
