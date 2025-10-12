import { Component, Input } from '@angular/core';
import { NgIf, NgFor, SlicePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Tool } from '../../models/tool';
import { ToolService } from '../../services/tool.service';

@Component({
  selector: 'app-tool-card',
  standalone: true,
  imports: [NgIf, NgFor, SlicePipe, RouterLink],
  template: `
    <div class="card group h-full flex flex-col cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-gradient-to-br from-brand-50 to-white relative">
      <span *ngIf="isCompared" class="absolute top-2 right-2 bg-brand-600 text-white text-xs px-3 py-1 rounded-full shadow z-10 animate-bounce">Compared</span>
      <div class="flex items-center gap-4 mb-2">
        <div class="flex items-center justify-center h-16 w-16 rounded-xl ring-2 ring-brand-200 bg-gradient-to-tr from-brand-100 to-brand-50 shadow-lg">
          <img [src]="tool.logo" [alt]="tool.name + ' logo'" class="tool-logo object-contain bg-white" style="width:56px;height:56px;max-width:56px;max-height:56px;display:block;margin:auto;padding:4px;border-radius:0.75rem;box-shadow:0 2px 8px rgba(0,0,0,0.04);" />
        </div>
        <div class="flex-1">
          <a [routerLink]="['/tool', tool.slug]" class="font-semibold text-lg group-hover:text-brand-700 transition">{{tool.name}}</a>
          <div class="text-xs text-slate-600 mt-1">{{tool.category}}</div>
        </div>
        <span class="badge">{{tool.pricing}}</span>
      </div>
      <p class="mt-3 text-base text-slate-700 flex-1 font-medium">{{tool.shortDescription}}</p>
      <div class="mt-4 flex flex-wrap items-center gap-2">
        <ng-container *ngFor="let p of tool.pros | slice:0:2">
          <span class="pill bg-green-50 text-green-700">+ {{p}}</span>
        </ng-container>
        <ng-container *ngIf="tool.cons.length">
          <span class="pill bg-red-50 text-red-700">− {{tool.cons[0]}}</span>
        </ng-container>
      </div>
      <div class="mt-6 flex items-center justify-between gap-2">
        <button (click)="svc.toggleCompare(tool.id)" class="btn-secondary w-1/2">Add to Compare</button>
        <button (click)="svc.toggleFavorite(tool.id)" class="btn-primary w-1/2">Save</button>
      </div>
    </div>
  `
})
export class ToolCardComponent {
  @Input() tool!: Tool;
  @Input() isCompared: boolean = false;
  constructor(public svc: ToolService) {}

  onImgError(event: Event) {
    (event.target as HTMLImageElement).src = 'assets/logos/default.png';
  }
}
