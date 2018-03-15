import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'project-B-data-bind',
  templateUrl: './data-bind.component.html',
  styleUrls: ['./data-bind.component.css']
})
export class DataBindComponent implements OnInit {

  public interpolation:string = 'Olá Mundo';
  public sistemaclass:string = 'emclasse';
  public propertBind:string  = 'Propriedade';
  public boleano:boolean = true;
  public boleanotipo:boolean = false;
  public url:string = 'https://www.google.com.br/?gws_rd=cr&dcr=0&ei=z8epWsjNLYmGwgSMyKqgAw'
  constructor() { }

  public obterValor():number{
    return 33;
  }
  ngOnInit() {
  }

}
