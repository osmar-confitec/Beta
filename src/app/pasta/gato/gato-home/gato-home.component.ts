import { Component, OnInit } from '@angular/core';
import { CarrosinhaService } from '../../../services/carrosinha.service';
import { ComunicacaoService } from '../../services/comunicacao.service';

@Component({
  selector: 'project-B-gato-home',
  templateUrl: './gato-home.component.html',
  styleUrls: ['./gato-home.component.css']
})
export class GatoHomeComponent implements OnInit {

  constructor( private carrosinhaService: CarrosinhaService,
               private comunicacaoService: ComunicacaoService) {



  }


latir(){

  this.comunicacaoService.emissor.emit('au');
}
  somar() {


    this.carrosinhaService.numero++;
    console.log(this.carrosinhaService.numero)
  }
  ngOnInit() {
  }

}
