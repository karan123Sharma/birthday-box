import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InviewDirective } from '../../directives/inview.directive';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, InviewDirective],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class LandingComponent {
  @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;

  isPlaying = false;
  songTitle = 'Itni Si Baat Hain ( Fav Song )';
  artistName = 'Pritam, Arijit Singh, Antara Mitra';
  albumCover = 'album cover.jpg';
  heroImage = 'hero.png';

  togglePlay(): void {
    const audio = this.audioPlayer?.nativeElement;
    if (!audio) return;

    if (this.isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    this.isPlaying = !this.isPlaying;
  }

  scrollDown(): void {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  }
}
