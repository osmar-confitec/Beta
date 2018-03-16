import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Fornecedor } from '../Models/fornecedor';


@Component({
  selector: 'project-B-primeira-grid-demanda',
  templateUrl: './primeira-grid-demanda.component.html',
  styleUrls: ['./primeira-grid-demanda.component.css']
})
export class PrimeiraGridDemandaComponent implements OnInit {


  @Output() emissor = new EventEmitter<Fornecedor>();

  devolverEmissor(fornecedor:Fornecedor)
  {

 
    let  uniqueProducts = this.ListaFornecedores.filter( function( elem, i, array ) {
      return elem.id === fornecedor.id;
  } );
    this.emissor.emit(uniqueProducts[0]) 
  }

  ListaFornecedores:Array<Fornecedor> =  [ 
       {id: 1, nome:"Osmar" , endereco: "Rua tal de souza" , bairro:"Liberdade" } ,
       { id: 2,  nome:"Genesio" , endereco: "Rua tal de souza" , bairro:"Liberdade" } 
       , { id: 3, nome:"Fabio" , endereco: "Rua tal de souza" , bairro:"Liberdade" } 
                      ]
  constructor() { }

  onReceberfiltros(evento)
  {
    console.dir(evento);
    console.log(` Recebibo pelo filtro ${evento} ` );

    this.ListaFornecedores = [];
    
    this.ListaFornecedores = [ 
      { id:100, nome:"Filtrado" , endereco: "Rua tal de souza" , bairro:"Liberdade" } 
                     ]

  }



  ngOnInit() {
  }

}
