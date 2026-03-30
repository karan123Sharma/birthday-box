import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InviewDirective } from '../../directives/inview.directive';

interface Milestone {
  emoji: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule, InviewDirective],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css',
})
export class TimelineComponent {
  heading = 'The Akira Experience';
  subheading = 'if you know her, you know.';

  milestones: Milestone[] = [
    {
      emoji: '🌙',
      title: 'The late-night listener',
      description:
        "The kind of person you text at 3 AM knowing she'll actually be awake — and not just awake, but genuinely willing to listen. She never makes you feel like you're too much. No matter how random the topic or how heavy the conversation, she just gets it. Every single time.",
    },
    {
      emoji: '😂',
      title: 'Chaotically funny',
      description:
        "Sends the most unhinged memes with absolutely zero context and somehow expects you to understand. Half the time you're laughing before you even process what she sent. The other half you're staring at your screen trying to figure out if she's okay. Either way, it's never boring when she's around.",
    },
    {
      emoji: '🧠',
      title: 'Quietly wise',
      description:
        "She doesn't give advice to sound smart — she gives it because she actually cares. And somehow, without overcomplicating anything, she says the one thing you didn't even know you needed to hear. The kind of person who makes you feel understood without having to over-explain yourself.",
    },
    {
      emoji: '🤍',
      title: 'Loyal without the drama',
      description:
        "She doesn't announce it, doesn't make it a whole thing. She just stays. Through the highs, the lows, the weird silences where neither of you texts for a week — and then picks up right where you left off like nothing happened. That kind of loyalty is rare, and she makes it look effortless.",
    },
    {
      emoji: '✨',
      title: 'One of a kind',
      description:
        "Honestly, the internet did one thing right — and that was putting Akira into people's lives. She's the kind of person you don't come across twice. If you know her, you already know you got lucky. And if she considers you a friend, you've genuinely won.",
    },
  ];
}
