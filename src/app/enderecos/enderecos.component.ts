import { Component, OnInit } from '@angular/core';
import { EnderecosModel } from './models/enderecos-model';

@Component({
  selector: 'project-B-enderecos',
  templateUrl: './enderecos.component.html',
  styleUrls: ['./enderecos.component.css']
})
export class EnderecosComponent implements OnInit {


  public EnderecosModel:EnderecosModel = new EnderecosModel("","",0);

  constructor() { }

  ngOnInit() {
  }

}
