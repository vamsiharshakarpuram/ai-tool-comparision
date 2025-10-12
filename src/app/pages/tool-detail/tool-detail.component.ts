import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';
import { ToolService } from '../../services/tool.service';

@Component({
  standalone: true,
  selector: 'app-tool-detail',
  imports: [NgIf, NgFor, RouterLink],
  template: `
    <ng-container *ngIf="tool(); else notfound">
      <div class="grid lg:grid-cols-3 gap-6">
        <div class="lg:col-span-2 card">
          <div class="flex items-center gap-3">
            <img [src]="tool()!.logo" alt="" class="h-12 w-12 rounded-md ring-1 ring-slate-200 object-cover">
            <div>
              <h1 class="text-2xl font-bold">{{tool()!.name}}</h1>
              <div class="text-sm text-slate-600">{{tool()!.category}} • {{tool()!.pricing}}</div>
            </div>
          </div>
          <p class="mt-4 text-slate-700">{{tool()!.description}}</p>
          <div class="mt-4">
            <h2 class="font-semibold">Pros</h2>
            <ul class="list-disc list-inside text-sm text-slate-700">
              <li *ngFor="let p of tool()!.pros">{{p}}</li>
            </ul>
            <h2 class="font-semibold mt-3">Cons</h2>
            <ul class="list-disc list-inside text-sm text-slate-700">
              <li *ngFor="let c of tool()!.cons">{{c}}</li>
            </ul>
          </div>
        </div>
        <aside class="card space-y-3">
          <a class="btn-primary w-full justify-center" [href]="tool()!.website" target="_blank" rel="noopener">Try Now</a>
          <button class="btn-secondary w-full justify-center" (click)="svc.toggleCompare(tool()!.id)">Add to Compare</button>
          <button class="btn-secondary w-full justify-center" (click)="svc.toggleFavorite(tool()!.id)">Save</button>
          <div class="text-sm text-slate-600">
            <div>Rating: <strong>{{tool()!.rating}}/5</strong></div>
            <div>API: <strong>{{tool()!.apiAvailable ? 'Yes' : 'No'}}</strong></div>
            <div>Free Trial: <strong>{{tool()!.hasFreeTrial ? 'Yes' : 'No'}}</strong></div>
            <div *ngIf="tool()!.tags?.length" class="mt-2 flex flex-wrap gap-2">
              <span *ngFor="let t of tool()!.tags" class="pill">{{t}}</span>
            </div>
          </div>
        </aside>
      </div>
    </ng-container>
    <ng-template #notfound>
      <div class="card">Tool not found.</div>
    </ng-template>
  `
})
export class ToolDetailComponent implements OnInit {
  tool = signal<any | null>(null);
  constructor(private route: ActivatedRoute, public svc: ToolService){}
  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug')!;
    const t = this.svc.getBySlug(slug);
    if (t) this.tool.set(t);
  }
}
