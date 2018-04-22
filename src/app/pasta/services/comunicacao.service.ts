import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ComunicacaoService {


  emissor = new EventEmitter<any>();
  constructor(


  ) {

    console.log(`entrei pelo comunicado`)
   }

}
