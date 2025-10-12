import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-contact',
  imports: [FormsModule],
  template: `
    <h1 class="text-2xl font-bold mb-4">Contact</h1>
    <form class="card space-y-4" (submit)="$event.preventDefault()">
      <div>
        <label class="block text-sm font-medium mb-1">Email</label>
        <input class="w-full rounded-xl ring-1 ring-slate-200 p-2" type="email" placeholder="you@example.com" required>
      </div>
      <div>
        <label class="block text-sm font-medium mb-1">Message</label>
        <textarea class="w-full rounded-xl ring-1 ring-slate-200 p-2" rows="4" placeholder="How can we help?"></textarea>
      </div>
      <button class="btn-primary" type="submit">Send</button>
    </form>
  `
})
export class ContactComponent {}
