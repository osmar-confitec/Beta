import { Injectable, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Injectable()
export class BroadcastServiceService {

  @Output() letrafoiSelecionada = new EventEmitter();

  constructor() { }

  onChange(deviceValue) {
   
    this.letrafoiSelecionada.emit(deviceValue);
  }

}
