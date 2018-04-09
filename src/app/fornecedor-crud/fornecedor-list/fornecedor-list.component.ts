import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'project-B-fornecedor-list',
  templateUrl: './fornecedor-list.component.html',
  styleUrls: ['./fornecedor-list.component.css']
})
export class FornecedorListComponent implements OnInit {

  constructor(private router:Router) { }
  AdicionarFornecedor(){

        this.router.navigate(['/login']);

  }
  ngOnInit() {
  }

}
