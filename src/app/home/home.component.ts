import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BroadcastBooleanoService } from '../services/broadcast-booleano.service';
import { EnderecoModel } from '../endereco/models/endereco-model';

@Component({
  selector: 'project-B-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public boolvalue: boolean = false;

  

  constructor(private service: BroadcastBooleanoService) {


  }

  onRecebeuEndereco(valor){
      console.dir(valor);
  }

  addprop1(e) {

    if (this.boolvalue) {
      this.service.onChange(false);
      this.boolvalue = false;
    }

    else {
      this.service.onChange(true);
      this.boolvalue = true;

    }


  }

  ngOnInit() {



  }

}
