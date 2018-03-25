import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cnpjPipe'
})
export class CnpjPipePipe implements PipeTransform {


  CNPJ(cnpj:string){
    cnpj=cnpj.replace(/\D/g,"")
    cnpj=cnpj.replace(/^(\d{2})(\d)/,"$1.$2")
    cnpj=cnpj.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3")
    cnpj=cnpj.replace(/\.(\d{3})(\d)/,".$1/$2")
    cnpj=cnpj.replace(/(\d{4})(\d)/,"$1-$2")
    return cnpj
  }

  transform(value: any, args?: any): any {
    return this.CNPJ(value);
  }

}
