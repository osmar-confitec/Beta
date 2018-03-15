import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { EnderecoModel } from './models/endereco-model';


@Component({
  selector: 'project-B-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {

  constructor() { }
  public EnderecoModel:EnderecoModel = new EnderecoModel("","",0,"")
  @Input() cep :string = '';
  @Output() receberEndereco = new EventEmitter<EnderecoModel>();


  ngOnInit() {
    if (  this.cep != '')
    {
        //Simulando uma busca por cep 
        this.EnderecoModel = 
              new EnderecoModel("Rua planalto dos acantilados "
                                ,"liberdade"
                                ,10
                                ,this.cep);
                  this.receberEndereco.emit(this.EnderecoModel);
    }
  }

}
