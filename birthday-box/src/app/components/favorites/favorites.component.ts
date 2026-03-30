import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InviewDirective } from '../../directives/inview.directive';

interface AvatarCard {
  image: string;
  caption: string;
}

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule, InviewDirective],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css',
})
export class FavoritesComponent {
  cards: AvatarCard[] = [
    {
      image: 'anushka.jpg',
      caption: 'the bollywood era',
    },
    {
      image: 'jisso.webp',
      caption: 'the k-drama arc',
    },
    {
      image: 'tangled.jpg',
      caption: 'the disney princess phase',
    },
    {
      image: 'her.jpg',
      caption: 'the main character herself',
    },
  ];
}
