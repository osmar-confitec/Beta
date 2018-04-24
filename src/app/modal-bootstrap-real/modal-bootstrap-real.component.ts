import { Component, OnInit, Input } from '@angular/core';

import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { TipoClickEnum } from './enum/tipo-click.enum';
import { TamanhoBotaoModalEnum } from './enum/tamanho-botao-modal.enum';
import { TamanhoModalEnum } from '../modal-bootstrap/enum/tamanho-modal.enum';

@Component({
  selector: 'project-B-modal-bootstrap-real',
  templateUrl: './modal-bootstrap-real.component.html',
  styleUrls: ['./modal-bootstrap-real.component.css']
})
export class ModalBootstrapRealComponent implements OnInit {

  @Input() titulo: string = ``;
  @Input() tituloBotao: string = ``;
  @Input() tamanhoBotao: TamanhoBotaoModalEnum = TamanhoBotaoModalEnum.Medio;
  @Input() tamanhoModal: TamanhoModalEnum = TamanhoModalEnum.Medio;


  TipoClick = TipoClickEnum;
  TamanhoBotaoModal = TamanhoBotaoModalEnum;
  TamanhoModal = TamanhoModalEnum;


  constructor(private modalService: NgbModal) { }
  d(tipoc: TipoClickEnum) {


  }

  abrir(content) {
    let modal: NgbModalRef;
    
    switch (this.tamanhoModal) {
      case TamanhoModalEnum.Pequeno:
        modal = this.modalService.open(content, { size: 'sm' })
        break;
      case TamanhoModalEnum.Grande:
        modal = this.modalService.open(content, { size: 'lg' })
        break;
      default:
        modal = this.modalService.open(content);
    }

    modal.result.then((result) => {
      // this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  ngOnInit() {
  }

}
