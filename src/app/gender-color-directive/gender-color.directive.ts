import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appGenderColor]'
})
export class GenderColorDirective {

  @Input('appGenderColor') gender;

  @HostListener('mouseenter') onMouseEnter() {
    const color = this.gender === 1 ? '#ddebff' : '#fde3ff';
    this.highlight(color);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  constructor(private element: ElementRef) { }

  private highlight(color: string): void {
    this.element.nativeElement.style.backgroundColor = color;
  }
}
