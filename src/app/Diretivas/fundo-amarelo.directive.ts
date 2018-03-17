import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[projectBFundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(private _elementRef:ElementRef , private _render: Renderer) {

    this._render.setElementStyle(this._elementRef.nativeElement,'backgroundColor','yellow');
  /*   this._elementRef.nativeElement.style.backgroundColor = 'yellow'
      console.log(this._elementRef); */

   }

}
