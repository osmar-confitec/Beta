import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Fornecedor } from '../Models/fornecedor';


@Component({
  selector: 'project-B-filtros-demanda',
  templateUrl: './filtros-demanda.component.html',
  styleUrls: ['./filtros-demanda.component.css']
})
export class FiltrosDemandaComponent implements OnInit {

 
  ddFornecedor:Fornecedor = new Fornecedor(0,"","","");

  @Output() Emtittttt = new EventEmitter<Fornecedor>();

  pesquisar(){

      console.log(this.ddFornecedor);
      this.Emtittttt.emit(this.ddFornecedor);
  }

  constructor() { }

  ngOnInit() {
  }

}
