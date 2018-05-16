import { OnInit, Input } from '@angular/core';
import { Directive, Renderer, ElementRef } from '@angular/core';

@Directive({
  selector: '[moeda-format]'
})
export class MoedaFinalBrDirective implements OnInit {



  @Input() casasDecimais: number = 2;
  @Input() prefixoMoeda: string = `R$ `;
  @Input() valorFinal:number = 0;

  private valorFormatado(valor: string): string {
    //somente numeros
    return valor.replace(/[^0-9]/g, '');

  }

  ngOnInit(): void {
    this.renderer.listen(this.elementRef.nativeElement, 'keyup', (event) => {
      if (event.keyCode === 13)
        return;

      let valor = this.valorFormatado(this.elementRef.nativeElement.value);
      this.valorFinal = parseFloat((!valor ? '0' :valor)) / 100;
      valor = valor.replace(/(\d{1,2})$/, ',$1');
      valor = valor.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
      valor = valor != ''? this.prefixoMoeda+valor:'';
      this.renderer.setElementProperty(this.elementRef.nativeElement, 'value',  valor);
      console.log(this.valorFinal);
      
    });
  }
  private el: HTMLInputElement;

  constructor(
    private renderer: Renderer,
    private elementRef: ElementRef
  ) {
    this.el = this.elementRef.nativeElement;
  }

}
