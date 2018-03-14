import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'project-B-alfabeto',
  templateUrl: './alfabeto.component.html',
  styleUrls: ['./alfabeto.component.css']
})
export class AlfabetoComponent implements OnInit {

  alfabeto:string[] = ['A', 'B','C', 'D', 'E', 'F']
  
  @Output() letrafoiSelecionada = new EventEmitter();


  constructor() { }

  onChange(deviceValue) {
    console.log(deviceValue);
    this.letrafoiSelecionada.emit(deviceValue);
  }

  ngOnInit() {



  }

}
