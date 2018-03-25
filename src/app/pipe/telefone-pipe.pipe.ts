import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefonePipe'
})
export class TelefonePipePipe implements PipeTransform {

  Tel(tel: string) {
    tel = tel.replace(/\D/g, "")
    tel = tel.replace(/^(\d)/, "($1")
    tel = tel.replace(/(.{3})(\d)/, "$1)$2")
    if (tel.length == 9) {
      tel = tel.replace(/(.{1})$/, "-$1")
    } else if (tel.length == 10) {
      tel = tel.replace(/(.{2})$/, "-$1")
    } else if (tel.length == 11) {
      tel = tel.replace(/(.{3})$/, "-$1")
    } else if (tel.length == 12) {
      tel = tel.replace(/(.{4})$/, "-$1")
    } else if (tel.length > 12) {
      tel = tel.replace(/(.{4})$/, "-$1")
    }
    return tel;
  }

  transform(value: any, args?: any): any {
    return this.Tel(value);
  }

}
