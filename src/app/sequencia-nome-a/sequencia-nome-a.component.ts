import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'project-B-sequencia-nome-a',
  templateUrl: './sequencia-nome-a.component.html',
  styleUrls: ['./sequencia-nome-a.component.css']
})
export class SequenciaNomeAComponent implements OnInit {

  nomes:string[] = ['Osmar Gonlçalves Vieira', 'José lentilha','Marcio Takenoko', 'Alcéia', 'Francisco', 'Marina']

  constructor() { }

  ngOnInit() {
  }

}
