import { Component, OnInit, OnDestroy } from '@angular/core';
import { ComunicacaoService } from '../../services/comunicacao.service';
import { ISubscription } from 'rxjs/Subscription';

@Component({
  selector: 'project-B-coleira-anti-latido',
  templateUrl: './coleira-anti-latido.component.html',
  styleUrls: ['./coleira-anti-latido.component.css']
})
export class ColeiraAntiLatidoComponent implements OnInit , OnDestroy {

  subs:ISubscription 
  latido:string = ``;
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
  constructor(private comunicacaoService:ComunicacaoService) { }

  ngOnInit() {

  this.subs =   this.comunicacaoService.emissor.subscribe(sub=>{
          this.latido  += sub;
    })
  }

}
