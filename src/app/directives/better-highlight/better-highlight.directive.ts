import { Directive, ElementRef, Renderer2, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private theElement: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.theElement.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseenter') mouseEnter(event: Event) {
    this.renderer.setStyle(this.theElement.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseleave') mouseLeave(event: Event) {
    this.renderer.setStyle(this.theElement.nativeElement, 'background-color', 'transparent');
  }
}
