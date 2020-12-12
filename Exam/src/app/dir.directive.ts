import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDir]'
})
export class DirDirective {
  private color = null;
  constructor( private el: ElementRef ,
               private renderer: Renderer2) {
    this.func1('normal');
  }
  @HostListener('mouseenter') onMouseEnter(): void {
    this.func1('bold');
    this.color = 'yellow';
  }
  @HostListener('mouseleave') onMouseLeave(): void {
    this.func1('normal');
    this.color = 'blue';
  }
  // tslint:disable-next-line:typedef
  @HostBinding('style.color') get setColor(){
    return this.color;
  }
  private func1(value: string): void{
    this.renderer.setStyle(this.el.nativeElement, 'font-weight', value);
  }

}
