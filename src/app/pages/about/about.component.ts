import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-about',
  template: `
    <h1 class="text-2xl font-bold mb-4">About</h1>
    <div class="card space-y-2">
      <p>We make AI tools simple to understand with honest pros/cons and clear comparisons.</p>
      <p>No jargon. Just clarity and practical recommendations.</p>
    </div>
  `
})
export class AboutComponent {}
