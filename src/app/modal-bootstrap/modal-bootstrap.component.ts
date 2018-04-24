import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import {  TamanhoModalEnum } from './enum/tamanho-modal.enum';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery';
import { UtilitariosSystemService } from '../services/utilitarios-system.service';

@Component({
  selector: 'project-B-modal-bootstrap',
  templateUrl: './modal-bootstrap.component.html',
  styleUrls: ['./modal-bootstrap.component.css']
})
export class ModalBootstrapComponent implements OnInit, AfterViewInit {
  closeResult: string;
  ngAfterViewInit(): void {
   
  }
  el:any;
  @Input() tamanhoModal:TamanhoModalEnum 
  TamanhoModal = TamanhoModalEnum ;
  public code:string;

  constructor(private modalService: NgbModal,private  utilitariosSystemService:UtilitariosSystemService) {


   }

   open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  showModal(){

      this.el.modal('show');

  }
  c(valor:string){
      console.log(valor)
  }
  d(valor:string){
    console.log(valor)

  }

  hideModal(){

    this.el.modal('hide');
  }

  ngOnInit() {
      this.code = this.utilitariosSystemService.guid();
      this.el  = $(`#${this.code}`);
     
  }

}
