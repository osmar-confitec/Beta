import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CachorroHomeComponent } from './cachorro-home/cachorro-home.component';
import { routing } from './app.routing';
import { PastaModule } from '../pasta.module';
import { ColeiraAntiLatidoComponent } from './coleira-anti-latido/coleira-anti-latido.component';


@NgModule({
  imports: [
    CommonModule,
    routing,
    PastaModule
  ],
  declarations: [CachorroHomeComponent, ColeiraAntiLatidoComponent],
  exports:[ColeiraAntiLatidoComponent]
})
export class CachorroModule { }
