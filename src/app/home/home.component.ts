import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { BroadcastBooleanoService } from '../services/broadcast-booleano.service';
import { EnderecoModel } from '../endereco/models/endereco-model';
import * as jQuery from 'jquery';

@Component({
  selector: 'project-B-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public boolvalue: boolean = false;

  @ViewChild('txtElementAlterMore')  txtElementAlterMore :ElementRef;

  alterarInput(){
       let valor =  jQuery('#txtnome').val();
       jQuery('#txtnome').css("background-color", "yellow");
       console.log(valor);
     // console.log(this.txtElementAlterMore);
      this.txtElementAlterMore.nativeElement.value = 10;

  }

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
