import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import 'zone.js';
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), provideAnimations()]
}).catch(err => console.error(err));
