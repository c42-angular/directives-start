import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor = 'blue';
  @Input() highlightColor = 'transparent';
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private theElement: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // // this.renderer.setStyle(this.theElement.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseEnter(event: Event) {
    // this.renderer.setStyle(this.theElement.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseLeave(event: Event) {
    // this.renderer.setStyle(this.theElement.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }
}
