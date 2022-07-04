import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) {
      
   }
   @HostListener('mouseenter') onMouseEnter() {
    this.highlight('pink','25px');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('', '14px');
  }
  
  private highlight(color: string, size: string) {
    this.el.nativeElement.style.color = color;
    this.el.nativeElement.style.fontSize = size;
  }
}
