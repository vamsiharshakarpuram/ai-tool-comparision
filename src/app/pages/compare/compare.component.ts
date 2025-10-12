import { Component, computed } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ToolService } from '../../services/tool.service';

@Component({
  standalone: true,
  selector: 'app-compare',
  imports: [NgFor, NgIf],
  template: `
    <h1 class="text-2xl font-bold mb-4">Compare Tools</h1>
    <div *ngIf="tools().length === 0" class="card">Add up to 4 tools from the list to compare side-by-side.</div>

    <div class="overflow-x-auto" *ngIf="tools().length">
      <table class="min-w-full text-sm">
        <thead>
          <tr class="text-left">
            <th class="p-3">Metric</th>
            <th class="p-3" *ngFor="let t of tools()">{{t.name}}</th>
          </tr>
        </thead>
        <tbody class="divide-y">
          <tr>
            <td class="p-3 font-medium">Category</td>
            <td class="p-3" *ngFor="let t of tools()">{{t.category}}</td>
          </tr>
          <tr>
            <td class="p-3 font-medium">Pricing</td>
            <td class="p-3" *ngFor="let t of tools()">{{t.pricing}} <span *ngIf="t.priceRange" class="text-slate-500">({{t.priceRange}})</span></td>
          </tr>
          <tr>
            <td class="p-3 font-medium">Rating</td>
            <td class="p-3" *ngFor="let t of tools()">{{t.rating}}/5</td>
          </tr>
          <tr>
            <td class="p-3 font-medium">Pros</td>
            <td class="p-3" *ngFor="let t of tools()">{{t.pros.join(', ')}}</td>
          </tr>
          <tr>
            <td class="p-3 font-medium">Cons</td>
            <td class="p-3" *ngFor="let t of tools()">{{t.cons.join(', ')}}</td>
          </tr>
          <tr>
            <td class="p-3 font-medium">API</td>
            <td class="p-3" *ngFor="let t of tools()">{{t.apiAvailable ? 'Yes' : 'No'}}</td>
          </tr>
          <tr>
            <td class="p-3 font-medium">Free Trial</td>
            <td class="p-3" *ngFor="let t of tools()">{{t.hasFreeTrial ? 'Yes' : 'No'}}</td>
          </tr>
          <tr>
            <td class="p-3 font-medium">Website</td>
            <td class="p-3" *ngFor="let t of tools()">
              <a class="text-brand-600 underline" target="_blank" rel="noopener" [href]="t.website">Visit</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `
})
export class CompareComponent {
  tools = computed(() => {
    const ids = Array.from(this.svc.compareList());
    return this.svc.tools().filter(t => ids.includes(t.id));
  });
  constructor(private svc: ToolService) {}
}
