import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appCustomAttribute]',
})
export class CustomAttributeDirective {
  @Input() backgroundColorFirst: string = 'brown';
  @HostBinding('style.color') elementColor!: string;
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // using native element
    // (this.elementRef.nativeElement as HTMLElement).style.backgroundColor =
    //   'red';
    // using renderer
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'backgroundColor',
      this.backgroundColorFirst
    );
  }

  @HostListener('mouseenter') onMouseEnter(event: Event) {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'green'
    );
    this.elementColor = 'white';
  }
  @HostListener('mouseleave') onMouseLeave(event: Event) {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'blue'
    );
    this.elementColor = this.backgroundColorFirst;
  }
}
