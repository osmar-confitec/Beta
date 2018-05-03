import { Modelo } from './modelo';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'drop-down-selecionar',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  @Output() onEmit = new EventEmitter<Modelo>()
  @Input() public selected:Modelo = new Modelo();
  constructor() { }

  onOptionsSelected(modelo:Modelo){
    this.selected.id = modelo.id;
    this.selected.nome = modelo.nome;
    
    this.onEmit.emit(modelo);

  }

  @Input()  lst: Modelo[] = [
    
    {id:100,nome:`Selecione...`},{id:1,nome:`Osmar Gonçalves Vieira`},{id:2,nome:`Maria do carmo`}] ;

  ngOnInit() {
  }

}
