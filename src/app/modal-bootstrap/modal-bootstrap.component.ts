import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { TamanhoModal } from './enum/tamanho-modal.enum';

import * as $ from 'jquery';
import { UtilitariosSystemService } from '../services/utilitarios-system.service';

@Component({
  selector: 'project-B-modal-bootstrap',
  templateUrl: './modal-bootstrap.component.html',
  styleUrls: ['./modal-bootstrap.component.css']
})
export class ModalBootstrapComponent implements OnInit, AfterViewInit {

  ngAfterViewInit(): void {
   
  }
  el:any;
  @Input() tamanhoModal:TamanhoModal 
  TamanhoModal:TamanhoModal = TamanhoModal.Medio;
  public code:string;

  constructor(private  utilitariosSystemService:UtilitariosSystemService) {


   }


  showModal(){

      this.el.modal('show');

  }

  hideModal(){

    this.el.modal('hide');
  }

  ngOnInit() {
      this.code = this.utilitariosSystemService.guid();
      this.el  = $(`#${this.code}`);
     
  }

}
