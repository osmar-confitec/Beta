import { Directive, HostListener, ElementRef, OnInit, Renderer } from "@angular/core";

@Directive({
  selector: '[projectBMyCurrencyFormatter]'
})
export class MyCurrencyFormatterDirective {

  private el: HTMLInputElement;

  constructor(
    private renderer: Renderer,
    private elementRef: ElementRef
  ) {
    this.el = this.elementRef.nativeElement;
  }

  ngOnInit() {
    this.el.value = '10';
    this.renderer.listen(this.elementRef.nativeElement, 'keyup', (event) => {
      // ...
      console.log(event);
  });
  }

  @HostListener("focus", ["$event.target.value"])
  onFocus(value) {
    this.el.value = value + 'formatado';
  }



  

  @HostListener("blur", ["$event.target.value"])
  onBlur(value) {
    this.el.value = value + 'formatado';
  }

}
