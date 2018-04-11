import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'project-B-fornecedor-list',
  templateUrl: './fornecedor-list.component.html',
  styleUrls: ['./fornecedor-list.component.css']
})
export class FornecedorListComponent implements OnInit {

  constructor(private router:Router,private route: ActivatedRoute) {

    let param1 = this.route.snapshot.queryParams["pagina"];
    console.dir(param1);
   }
  AdicionarFornecedor(){

        this.router.navigate(['/login']);

  }
  ngOnInit() {
  }

}
