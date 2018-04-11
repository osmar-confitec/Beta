import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FornecedorService } from '../../services/fornecedor.service';
import { ISubscription } from 'rxjs/Subscription';


@Component({
  selector: 'project-B-fornecedor-list',
  templateUrl: './fornecedor-list.component.html',
  styleUrls: ['./fornecedor-list.component.css']
})
export class FornecedorListComponent implements OnInit , OnDestroy {

  subscription:ISubscription ;

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  constructor(private router:Router,
              private fornecedorService:FornecedorService,
              private route: ActivatedRoute) {

    let param1 = this.route.snapshot.queryParams["pagina"];
    console.dir(param1);
   }
  AdicionarFornecedor(){

        this.router.navigate(['/login']);

  }
  ngOnInit() {

    this.subscription =   this.fornecedorService.ObterFornecedores().subscribe((valor)=>{
              console.log(valor);
      });
  }


}
