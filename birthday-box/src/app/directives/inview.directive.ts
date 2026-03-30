import {
  Directive,
  ElementRef,
  Input,
  AfterViewInit,
  OnDestroy,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appInview]',
  standalone: true,
})
export class InviewDirective implements AfterViewInit, OnDestroy {
  @Input() appInview: string = 'animate-fade-up';
  @Input() animateDelay: string = '0ms';
  @Input() animateThreshold: number = 0.15;

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.renderer.setStyle(this.el.nativeElement, 'transitionDelay', this.animateDelay);
    this.renderer.addClass(this.el.nativeElement, 'animate-hidden');

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.renderer.removeClass(this.el.nativeElement, 'animate-hidden');
          this.renderer.addClass(this.el.nativeElement, this.appInview);
          this.observer.unobserve(this.el.nativeElement);
        }
      },
      { threshold: this.animateThreshold }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
