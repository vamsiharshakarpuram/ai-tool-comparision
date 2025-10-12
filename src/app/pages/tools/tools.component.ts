import { Component, computed, signal } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ToolCardComponent } from '../../components/tool-card/tool-card.component';
import { FiltersComponent } from '../../components/filters/filters.component';
import { ToolService } from '../../services/tool.service';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-tools',
  imports: [NgFor, NgIf, ToolCardComponent, FiltersComponent, RouterLink],
  styles: [`
    :host { display:block; }

    .wrap { max-width: 1200px; margin: 0 auto; padding: 16px; }
    .page-head { display:flex; align-items:center; justify-content:space-between; gap:12px; margin-bottom: 12px; }
    .title { font-size: 28px; font-weight: 800; letter-spacing:-0.3px; }
    .subtle { color:#667085; font-size: 14px; }

    /* Sticky Filters */
    .filters-bar { position: sticky; top: 0; z-index: 10; background: rgba(255,255,255,.94);
                   backdrop-filter: blur(8px); border-bottom: 1px solid #eceff3; padding: 10px 0; margin: 0 -16px; }
    .filters-inner { max-width: 1200px; margin: 0 auto; padding: 0 16px; }

    /* Grid */
    .grid { display:grid; gap: 18px; grid-template-columns: repeat(1,minmax(0,1fr)); }
    @media (min-width:640px){ .grid{grid-template-columns:repeat(2,minmax(0,1fr));}}
    @media (min-width:980px){ .grid{grid-template-columns:repeat(3,minmax(0,1fr));}}

    .empty { background:#fff; border:1px solid #e6e8eb; border-radius: 14px; padding: 28px; text-align:center; color:#667085; }

    /* Floating Compare Dock */
    .compare-dock {
      position: fixed; left:50%; transform:translateX(-50%);
      bottom: 22px; z-index: 50;
      background:#ffffff; border:1px solid #dee1ea; border-radius: 18px;
      box-shadow:0 12px 35px rgba(16,24,40,.12);
      padding: 14px 18px; display:flex; align-items:center; gap:16px;
      animation:fadeIn .25s ease-out both;
    }
    @keyframes fadeIn{from{opacity:0; transform:translateX(-50%) translateY(8px);} to{opacity:1; transform:translateX(-50%) translateY(0);}}

    /* Tool logo chips */
    .compare-list { display:flex; align-items:center; gap:14px; max-width:62vw; overflow-x:auto; }
    .tool-chip { display:flex; flex-direction:column; align-items:center; justify-content:center; width:70px; transition:transform .2s ease, box-shadow .2s ease; }
    .tool-chip:hover { transform:translateY(-2px) scale(1.03); }
    .logo-frame { width:50px; height:50px; display:flex; align-items:center; justify-content:center;
                  border-radius:12px; background:#f8f9fb; border:1px solid #e3e6ec;
                  box-shadow:inset 0 1px 3px rgba(0,0,0,.04); overflow:hidden; }
    .logo-frame img { max-width:34px; max-height:34px; object-fit:contain; }
    .tool-name { margin-top:6px; font-size:12px; font-weight:600; color:#0f172a;
                 text-align:center; max-width:70px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }

    /* Buttons */
    .btn { display:inline-flex; align-items:center; justify-content:center; font-size:14px;
           padding:8px 14px; border-radius:10px; border:1px solid #d8dbe0;
           background:#fff; color:#111827; cursor:pointer; transition:background .2s; }
    .btn:hover { background:#f7f8fb; }
    .btn.primary { background:#5148ff; color:#fff; border-color:#5148ff; font-weight:600; }
    .btn.primary:hover { background:#3a33d9; }
    .btn.ghost { background:#fff; color:#344054; }
    .btn.ghost:hover { background:#f5f6fb; }

    /* Count badge */
    .count-badge { font-size:12px; font-weight:700; color:#5148ff; background:#eef0ff;
                   border:1px solid #dfe2fe; padding:3px 8px; border-radius:999px; }
    .divider { width:1px; height:28px; background:#e5e7eb; }
  `],
  template: `
    <div class="wrap">
      <div class="page-head">
        <h1 class="title">Browse Tools</h1>
        <div class="subtle">Pick up to 4 tools to compare</div>
      </div>

      <div class="filters-bar">
        <div class="filters-inner">
          <app-filters (changed)="onFilters($event)"></app-filters>
        </div>
      </div>

      <div class="grid" style="margin-top:16px;">
        <ng-container *ngIf="filtered().length; else empty">
          <app-tool-card *ngFor="let tool of filtered()" [tool]="tool" [isCompared]="isCompared(tool.id)"></app-tool-card>
        </ng-container>
        <ng-template #empty>
          <div class="empty">No tools match your filters.</div>
        </ng-template>
      </div>

      <!-- Compare Dock -->
      <div *ngIf="compareTools().length" class="compare-dock">
        <span class="count-badge">{{ compareTools().length }}/4 selected</span>
        <div class="divider"></div>
        <div class="compare-list">
          <ng-container *ngFor="let t of compareTools()">
            <div class="tool-chip" title="{{t.name}}">
              <div class="logo-frame">
                <img [src]="t.logo" [alt]="t.name">
              </div>
              <div class="tool-name">{{t.name}}</div>
            </div>
          </ng-container>
        </div>
        <div class="divider"></div>
        <a routerLink="/compare-now" class="btn primary">Compare Now</a>
        <button class="btn ghost" (click)="clearCompare()">Clear</button>
      </div>
    </div>
  `
})
export class ToolsComponent {
  private state = signal<{ [key: string]: string }>({});

  constructor(public svc: ToolService) {}

  filtered = computed(() => {
    const s = this.state();
    return this.svc.tools().filter((t: any) =>
      (!s['category'] || t.category === s['category'])
      && (!s['pricing'] || t.pricing === s['pricing'])
      && (!s['rating'] || t.rating >= Number(s['rating']))
      && (!s['q'] || t.name.toLowerCase().includes(s['q'].toLowerCase())
        || t.shortDescription.toLowerCase().includes(s['q'].toLowerCase()))
    );
  });

  compareTools = computed(() => {
    const ids = Array.from(this.svc.compareList());
    return this.svc.tools().filter((t: any) => ids.includes(t.id));
  });

  isCompared(id: string): boolean {
    return this.svc.compareList().has(id);
  }

  clearCompare() {
    const anySvc: any = this.svc as any;
    if (typeof anySvc.clearCompare === 'function') {
      anySvc.clearCompare();
      return;
    }
    for (const id of Array.from(this.svc.compareList())) {
      this.svc.toggleCompare(id);
    }
  }

  onFilters(v: { [key: string]: string }) {
    this.state.set(v);
  }
}
