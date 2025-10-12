import { Component, computed } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ToolService } from '../../services/tool.service';

@Component({
  standalone: true,
  selector: 'app-compare-now',
  imports: [NgFor, NgIf, RouterLink],
  styles: [`
    :host { display:block; }
    .wrap { max-width: 1200px; margin: 0 auto; padding: 16px; }
    .title { text-align:center; font-size:28px; font-weight:800; margin:8px 0 6px; }
    .sub { text-align:center; color:#5b6471; margin-bottom:16px; }
    .toolbar { position:sticky; top:0; z-index:10; background:rgba(255,255,255,.9); backdrop-filter:blur(6px); border-bottom:1px solid #e6e8eb; }
    .toolbar-inner { display:flex; align-items:center; justify-content:space-between; gap:12px; padding:10px 0; }
    .chip-tool { display:flex; align-items:center; gap:8px; background:#fff; border:1px solid #e2e6ea; padding:6px 8px; border-radius:12px; }
    .chip-tool img { width:20px; height:20px; border-radius:6px; border:1px solid #e2e6ea; object-fit:contain; background:#fff; }
    .rm { font-size:12px; padding:4px 8px; border-radius:999px; background:#f3f4f6; color:#5b6471; border:0; cursor:pointer; }
    .rm:hover { background:#ffecec; color:#c12727; }
    .btn { display:inline-flex; align-items:center; justify-content:center; gap:6px; font-size:14px; padding:8px 12px; border-radius:10px; border:1px solid #d8dbe0; background:#fff; color:#1e2430; cursor:pointer; }
    .btn.primary { background:#5148ff; color:#fff; border-color:#5148ff; }
    .btn.primary:hover { background:#3a33d9; }
    .table-wrap { overflow-x:auto; border:1px solid #e6e8eb; border-radius:14px; background:#fff; }
    table { min-width:980px; width:100%; border-collapse:separate; border-spacing:0; font-size:14px; }
    thead th { position:sticky; top:0; background:#f7f8fc; border-bottom:1px solid #e6e8eb; z-index:2; }
    th, td { padding:12px; vertical-align:top; }
    thead th:first-child { border-top-left-radius:14px; }
    thead th:last-child  { border-top-right-radius:14px; }
    tbody tr:last-child td:first-child { border-bottom-left-radius:14px; }
    tbody tr:last-child td:last-child  { border-bottom-right-radius:14px; }
    tbody tr:not(:last-child) td { border-bottom:1px solid #eef0f2; }
    tbody tr:nth-child(even) td { background:#fcfcfe; }
    .row-title { position:sticky; left:0; background:inherit; font-weight:600; color:#2a2f3a; border-right:1px solid #eef0f2; min-width:200px; }
    .toolhead { display:flex; align-items:center; gap:10px; white-space:nowrap; }
    .toolhead img { width:26px; height:26px; border-radius:6px; border:1px solid #e2e6ea; object-fit:contain; background:#fff; }
    .tname { color:#101522; font-weight:700; text-decoration:none; }
    .tname:hover { text-decoration:underline; }
    .chip { display:inline-block; padding:4px 8px; border-radius:999px; font-size:12px; border:1px solid transparent; }
    .chip-green { background:#eafff2; color:#137b3a; border-color:#bdf2cf; }
    .chip-yellow{ background:#fff7dd; color:#8a6d00; border-color:#f4e4a3; }
    .chip-red   { background:#ffeaea; color:#b02929; border-color:#f2bdbd; }
    .chip-brand { background:#efeefe; color:#3b33d9; border-color:#cfcdfc; }
    .muted { color:#6a7280; }
    .stars { display:inline-block; margin-right:8px; }
    .star { color:#e5e7eb; font-size:16px; }
    .star.on { color:#f5b301; }
    .kpi { height:8px; width:160px; background:#e9ecf0; border-radius:6px; overflow:hidden; margin-top:6px; }
    .kpi > span { display:block; height:100%; background:#5148ff; }
    .list { padding-left:18px; margin:0; }
    .list li { margin:2px 0; }
    .pros { color:#116b2f; }
    .cons { color:#a61e1e; }
  `],
  template: `
    <div class="wrap">
      <h1 class="title">AI Tools — In-Depth Comparison</h1>
      <p class="sub">All parameters in one place: pricing, rating, platform coverage, integrations, policies, performance, support, and more.</p>

      <div class="toolbar">
        <div class="toolbar-inner">
          <div style="display:flex; gap:8px; overflow:auto;">
            <div *ngFor="let t of tools()" class="chip-tool">
              <img [src]="t.logo" [alt]="t.name"><strong style="font-size:13px;">{{t.name}}</strong>
              <button class="rm" (click)="remove(t.id)">Remove</button>
            </div>
            <span *ngIf="!tools().length" class="muted" style="font-size:13px;">Add tools from the Tools page to compare…</span>
          </div>
          <div><a routerLink="/tools" class="btn primary">+ Add Tools</a></div>
        </div>
      </div>

      <div *ngIf="tools().length===0" class="table-wrap" style="margin-top:16px; padding:28px; text-align:center;">
        <div style="font-size:18px; font-weight:700; margin-bottom:6px;">Nothing to compare yet</div>
        <div class="muted">Pick up to 4 tools to see the full table.</div>
      </div>

      <section *ngIf="tools().length" style="margin-top:16px;">
        <div class="table-wrap">
          <table role="table" aria-label="AI tool deep comparison">
            <thead>
              <tr>
                <th class="row-title">Metric</th>
                <th *ngFor="let t of tools()">
                  <div class="toolhead">
                    <img [src]="t.logo" [alt]="t.name">
                    <a [routerLink]="['/tool', t.slug]" class="tname">{{t.name}}</a>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <!-- Core -->
              <tr><td class="row-title">Category</td><td *ngFor="let t of tools()">{{t.category}}</td></tr>
              <tr>
                <td class="row-title">Pricing</td>
                <td *ngFor="let t of tools()">
                  <span [class]="'chip ' + pricingClass(t.pricing)">{{ t.pricing }}</span>
                  <span *ngIf="t.priceRange" class="muted"> • {{ t.priceRange }}</span>
                </td>
              </tr>
              <tr>
                <td class="row-title">Rating</td>
                <td *ngFor="let t of tools()">
                  <span class="stars" aria-hidden="true">
                    <ng-container *ngFor="let s of stars">
                      <span class="star" [class.on]="s <= t.rating">★</span>
                    </ng-container>
                  </span>
                  <span class="muted">{{t.rating}}/5</span>
                  <div class="kpi"><span [style.width.%]="(t.rating/5)*100"></span></div>
                </td>
              </tr>
              <tr><td class="row-title">API</td><td *ngFor="let t of tools()"><span [class]="'chip ' + (t.apiAvailable ? 'chip-green' : 'chip-red')">{{ t.apiAvailable ? 'Available' : 'No API' }}</span></td></tr>
              <tr><td class="row-title">Free Trial</td><td *ngFor="let t of tools()"><span [class]="'chip ' + (t.hasFreeTrial ? 'chip-green' : 'chip-red')">{{ t.hasFreeTrial ? 'Yes' : 'No' }}</span></td></tr>
              <tr>
                <td class="row-title">Best for (tags)</td>
                <td *ngFor="let t of tools()">
                  <ng-container *ngIf="t.tags?.length; else dash"><span *ngFor="let tag of t.tags" class="chip chip-brand" style="margin-right:6px;">{{tag}}</span></ng-container>
                  <ng-template #dash>—</ng-template>
                </td>
              </tr>

              <!-- New depth parameters -->
              <tr><td class="row-title">Platforms</td><td *ngFor="let t of tools()">{{ t.platforms?.join(', ') || '—' }}</td></tr>
              <tr><td class="row-title">Integrations</td><td *ngFor="let t of tools()">{{ t.integrations?.join(', ') || '—' }}</td></tr>
              <tr><td class="row-title">Export Formats</td><td *ngFor="let t of tools()">{{ t.exportFormats?.join(', ') || '—' }}</td></tr>
              <tr><td class="row-title">Languages Supported</td><td *ngFor="let t of tools()">{{ t.languagesSupported || '—' }}</td></tr>
              <tr><td class="row-title">Learning Curve</td><td *ngFor="let t of tools()">{{ t.learningCurve || '—' }}</td></tr>
              <tr><td class="row-title">Onboarding Time</td><td *ngFor="let t of tools()">{{ t.onboardingTimeMins ? (t.onboardingTimeMins + ' mins') : '—' }}</td></tr>
              <tr><td class="row-title">Docs Quality</td><td *ngFor="let t of tools()">{{ t.docsQuality ? (t.docsQuality + '/5') : '—' }}</td></tr>
              <tr><td class="row-title">Support Channels</td><td *ngFor="let t of tools()">{{ t.supportChannels?.join(', ') || '—' }}</td></tr>
              <tr><td class="row-title">Support SLA</td><td *ngFor="let t of tools()">{{ t.supportSLA || '—' }}</td></tr>
              <tr><td class="row-title">Community Size</td><td *ngFor="let t of tools()">{{ t.communitySize || '—' }}</td></tr>
              <tr><td class="row-title">Update Frequency</td><td *ngFor="let t of tools()">{{ t.updateFrequency || '—' }}</td></tr>
              <tr><td class="row-title">Benchmark / Quality</td><td *ngFor="let t of tools()">{{ t.accuracyOrQualityScore ? (t.accuracyOrQualityScore + '/100') : '—' }}</td></tr>
              <tr><td class="row-title">Latency (claim)</td><td *ngFor="let t of tools()">{{ t.latencyClaimMs ? (t.latencyClaimMs + ' ms') : '—' }}</td></tr>
              <tr><td class="row-title">Usage Limits</td><td *ngFor="let t of tools()">{{ t.usageLimits || '—' }}</td></tr>
              <tr><td class="row-title">Rate Limits</td><td *ngFor="let t of tools()">{{ t.rateLimits || '—' }}</td></tr>
              <tr>
                <td class="row-title">Security / Compliance</td>
                <td *ngFor="let t of tools()">
                  <ng-container *ngIf="t.security?.length; else dash2">{{ t.security.join(', ') }}</ng-container>
                  <ng-template #dash2>—</ng-template>
                </td>
              </tr>
              <tr><td class="row-title">Data Ownership</td><td *ngFor="let t of tools()">{{ t.dataOwnership || '—' }}</td></tr>
              <tr><td class="row-title">Stores User Data</td><td *ngFor="let t of tools()">{{ t.storesUserData === true ? 'Yes' : (t.storesUserData === false ? 'No' : '—') }}</td></tr>
              <tr><td class="row-title">PII / Privacy Policy</td><td *ngFor="let t of tools()">{{ t.piiPolicy || '—' }}</td></tr>
              <tr><td class="row-title">Offline Mode</td><td *ngFor="let t of tools()">{{ t.offlineMode === true ? 'Yes' : (t.offlineMode === false ? 'No' : '—') }}</td></tr>
              <tr><td class="row-title">Roadmap Transparency</td><td *ngFor="let t of tools()">{{ t.roadmapTransparency === true ? 'Yes' : (t.roadmapTransparency === false ? 'No' : '—') }}</td></tr>

              <!-- Pros / Cons -->
              <tr>
                <td class="row-title">Pros</td>
                <td *ngFor="let t of tools()">
                  <ul class="list pros"><li *ngFor="let p of t.pros">{{p}}</li></ul>
                </td>
              </tr>
              <tr>
                <td class="row-title">Cons</td>
                <td *ngFor="let t of tools()">
                  <ul class="list cons"><li *ngFor="let c of t.cons">{{c}}</li></ul>
                </td>
              </tr>

              <!-- CTAs -->
              <tr>
                <td class="row-title">Actions</td>
                <td *ngFor="let t of tools()">
                  <div style="display:flex; gap:8px; flex-wrap:wrap;">
                    <a [routerLink]="['/tool', t.slug]" class="btn">Full Breakdown</a>
                    <a [href]="t.website" target="_blank" rel="noopener" class="btn primary">Visit Site</a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  `
})
export class CompareNowComponent {
  stars = [1,2,3,4,5];

  tools = computed(() => {
    const ids = Array.from(this.svc.compareList());
    return this.svc.tools().filter(t => ids.includes(t.id));
  });

  constructor(public svc: ToolService) {}

  remove(id: string) { this.svc.toggleCompare(id); }

  pricingClass(p: string) {
    if (p === 'Free') return 'chip-green';
    if (p === 'Freemium') return 'chip-yellow';
    return 'chip-red';
  }
}
