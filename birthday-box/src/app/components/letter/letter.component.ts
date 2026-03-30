import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InviewDirective } from '../../directives/inview.directive';

@Component({
  selector: 'app-letter',
  standalone: true,
  imports: [CommonModule, InviewDirective],
  templateUrl: './letter.component.html',
  styleUrl: './letter.component.css',
})
export class LetterComponent {
  recipientName = 'Akira';
  giftLink = '#';

  letterBody = `I just want to say thank you—for always being there for me, for listening, and for sticking around through everything. It really means a lot, even if I don't say it often.

You've been such an important part of my life, and I'm genuinely grateful for all the moments we've shared. Whether it's the good times or bad times or the random conversations, you've always made things better just by being there.

Your patience, and the way you understand things without making them complicated. Not everyone has someone like that, and I'm glad I do.

I hope this year brings you happiness, peace, and everything you've been hoping for. You deserve good things, and I hope you get plenty of reasons to smile.

Stay the same, and don't ever change that part of you that makes you such a great person.`;

  signOff = 'Happy Birthday once again, Akira ✨';
  sender = 'From Spidey';

  onClaimGift(): void {
    if (this.giftLink && this.giftLink !== '#') {
      window.open(this.giftLink, '_blank');
    }
  }
}
