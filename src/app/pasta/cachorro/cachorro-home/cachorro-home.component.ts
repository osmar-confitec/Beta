import { Component, OnInit } from '@angular/core';
import { CarrosinhaService } from '../../../services/carrosinha.service';

@Component({
  selector: 'project-B-cachorro-home',
  templateUrl: './cachorro-home.component.html',
  styleUrls: ['./cachorro-home.component.css']
})
export class CachorroHomeComponent implements OnInit {

  somar(){

    this.carrosinhaService.numero++;
    console.log(this.carrosinhaService.numero) 
  }
  constructor(private carrosinhaService:CarrosinhaService ) { }

  ngOnInit() {
  }

}
