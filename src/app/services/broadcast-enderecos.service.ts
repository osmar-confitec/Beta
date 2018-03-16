import { Injectable, EventEmitter, Output } from '@angular/core';
import { EnderecosModel } from '../enderecos/models/enderecos-model';


@Injectable()
export class BroadcastEnderecosService {

  @Output()  emissorEndereco = new EventEmitter<EnderecosModel>();

  onEmitir(endereco:EnderecosModel) {
    this.emissorEndereco.emit(endereco);
  }
  constructor() { }

}
