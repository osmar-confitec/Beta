import { Component, OnInit } from '@angular/core';
import { Fornecedor } from '../Models/fornecedor';

@Component({
  selector: 'project-B-segunda-grid-demanda',
  templateUrl: './segunda-grid-demanda.component.html',
  styleUrls: ['./segunda-grid-demanda.component.css']
})
export class SegundaGridDemandaComponent implements OnInit {

  constructor() { }

  ObterRetorno(forn:Fornecedor){
    
    console.log(` Esse foi o fornecedor clicado  ` );
    console.log(forn);

  }

  ngOnInit() {
  }

}
