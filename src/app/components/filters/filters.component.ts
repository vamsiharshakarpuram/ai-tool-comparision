import { Component, EventEmitter, Output } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [NgFor],
  template: `
    <div class="card">
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label class="block text-sm font-medium mb-1">Category</label>
          <select class="w-full rounded-xl ring-1 ring-slate-200 p-2" (change)="emit('category', $any($event.target).value)">
            <option value="">All</option>
            <option *ngFor="let c of categories" [value]="c">{{c}}</option>
          </select>
        </div>
        <div>
          <label class="block text-sm font-medium mb-1">Pricing</label>
          <select class="w-full rounded-xl ring-1 ring-slate-200 p-2" (change)="emit('pricing', $any($event.target).value)">
            <option value="">All</option>
            <option>Free</option>
            <option>Freemium</option>
            <option>Paid</option>
          </select>
        </div>
        <div>
          <label class="block text-sm font-medium mb-1">Min Rating</label>
          <select class="w-full rounded-xl ring-1 ring-slate-200 p-2" (change)="emit('rating', $any($event.target).value)">
            <option value="">Any</option>
            <option>5</option><option>4</option><option>3</option><option>2</option><option>1</option>
          </select>
        </div>
        <div>
          <label class="block text-sm font-medium mb-1">Search</label>
          <input type="search" placeholder="Search tools..." class="w-full rounded-xl ring-1 ring-slate-200 p-2"
            (input)="emit('q', $any($event.target).value)"/>
        </div>
      </div>
    </div>
  `
})
export class FiltersComponent {
  @Output() changed = new EventEmitter<Record<string, string>>();
  categories = ['Text AI','Image AI','Video AI','Code AI','Productivity AI','Voice AI'];
  private state: Record<string,string> = {};
  emit(key: string, value: string) {
    this.state[key] = value;
    this.changed.emit({...this.state});
  }
}
