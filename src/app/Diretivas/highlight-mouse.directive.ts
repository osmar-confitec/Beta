import { Directive, HostListener, ElementRef , Renderer } from '@angular/core';

@Directive({
  selector: '[projectBHighlightMouse]'
})
export class HighlightMouseDirective {

 @HostListener('mouseenter') onMouseover(){

    

 }

  constructor(private _elementRef:ElementRef , private _render: Renderer) { }

}
