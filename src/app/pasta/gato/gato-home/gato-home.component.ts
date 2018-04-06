import { Component, OnInit } from '@angular/core';
import { CarrosinhaService } from '../../../services/carrosinha.service';

@Component({
  selector: 'project-B-gato-home',
  templateUrl: './gato-home.component.html',
  styleUrls: ['./gato-home.component.css']
})
export class GatoHomeComponent implements OnInit {

  constructor(private carrosinhaService:CarrosinhaService ) { }

  somar(){

    
     this.carrosinhaService.numero++;
     console.log(this.carrosinhaService.numero)
  }
  ngOnInit() {
  }

}
