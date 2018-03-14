import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'project-B-sequencia-nome-b',
  templateUrl: './sequencia-nome-b.component.html',
  styleUrls: ['./sequencia-nome-b.component.css']
})
export class SequenciaNomeBComponent implements OnInit {


  nomes:string[] = ['Osmar Gonlçalves Vieira', 'José lentilha','Marcio Takenoko', 'Alcéia', 'Francisco', 'Marina']

  constructor() { }

  ngOnInit() {
  }

}
