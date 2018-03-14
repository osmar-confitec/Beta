import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class BroadcastBooleanoService {

  @Output() emiter = new EventEmitter<boolean>();

  onChange(valorbool:boolean) {
   
    this.emiter.emit(valorbool);
  }

  constructor() { }

}
