import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value: any, args?: any): any {
        if (args!= null)
        {
          console.log(args);
        }
        let values  = value.split(' ');
        let result  = '';

        for(let v of values)
        {
          result += this.captalize(v) + ' ';
        }
        
        return result;
  }

  captalize(valor:string){
      return valor.substr(0,1).toUpperCase() + valor.substr(1).toLowerCase();
  }

}
