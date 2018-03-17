import { Directive, HostListener, ElementRef , Renderer, Input } from '@angular/core';

@Directive({
  selector: '[projectBHighlight]'
})
export class HighlightDirective {



  
 
 @Input() defaultColor:string = 'white' 
 @Input() highlightColor:string = 'yellow'


 @HostListener('mouseenter') onMouseover(){

  this._render.setElementStyle(
    this._elementRef.nativeElement,
    'backgroundColor',
    this.highlightColor
  );

 }


 @HostListener('mouseleave') onMouseleave(){

  this._render.setElementStyle(
    this._elementRef.nativeElement,
    'backgroundColor',
    this.defaultColor
  );

 }



 constructor(private _elementRef:ElementRef , private _render: Renderer) { }

}
