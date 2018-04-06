import { Component, OnInit } from '@angular/core';
import { Drop } from './models/drop';

@Component({
  selector: 'project-B-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  collection:Drop[] = [ 
    { descricao:'Banana' , id:1 },
    { descricao:'Pera' , id:2 },
    { descricao:'Maça' , id:3 },
    { descricao:'Nanica' , id:4 }
  ]
  constructor() { }

  ngOnInit() {
  }

}
