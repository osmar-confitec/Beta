import { Directive, Renderer, ElementRef } from '@angular/core';

@Directive({
  selector: '[moeda-brasileira]'
})
export class MoedaBrasileiraDirective {

  private el: HTMLInputElement;

  constructor(
    private renderer: Renderer,
    private elementRef: ElementRef
  ) {
    this.el = this.elementRef.nativeElement;
  }

}
