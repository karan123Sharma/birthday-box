import { Component } from '@angular/core';
import { LandingComponent } from './components/landing/landing.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { LetterComponent } from './components/letter/letter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LandingComponent, FavoritesComponent, TimelineComponent, LetterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
