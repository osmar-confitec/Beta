import { Directive, HostListener, ElementRef , Renderer } from '@angular/core';

@Directive({
  selector: '[projectBHighlightMouse]'
})
export class HighlightMouseDirective {

 @HostListener('mouseenter') onMouseover(){

  this._render.setElementStyle(
    this._elementRef.nativeElement,
    'backgroundColor',
    'yellow'
  );

 }


 @HostListener('mouseleave') onMouseleave(){

  this._render.setElementStyle(
    this._elementRef.nativeElement,
    'backgroundColor',
    'white'
  );

 }

  constructor(private _elementRef:ElementRef , private _render: Renderer) 
  { 
      
  }

}
