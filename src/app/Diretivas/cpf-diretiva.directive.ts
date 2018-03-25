import { Directive, Renderer, ElementRef } from '@angular/core';
import { CpfPipePipe } from '../pipe/cpf-pipe.pipe';

@Directive({
  selector: '[projectBCpfDiretiva]'
})
export class CpfDiretivaDirective {
  private el: HTMLInputElement;
  private cpf:CpfPipePipe = new CpfPipePipe();
  private valorFormatado:string;


  ngOnInit() {
    this.renderer.listen(this.elementRef.nativeElement, 'keyup', (event) => {
    this.valorFormatado =  this.cpf.transform(this.elementRef.nativeElement.value);
    this.renderer.setElementProperty(this.elementRef.nativeElement,'value',this.valorFormatado);
 
  });
  }

  constructor(
    private renderer: Renderer,
    private elementRef: ElementRef
  ) {
    this.el = this.elementRef.nativeElement;
  }

}
