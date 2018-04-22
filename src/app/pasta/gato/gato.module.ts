import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GatoHomeComponent } from './gato-home/gato-home.component';

import { PastaModule } from '../pasta.module';
import { CachorroModule } from '../cachorro/cachorro.module';
import { routingGato } from './app.routing';


@NgModule({
  imports: [
    
    CommonModule,
    routingGato,
    PastaModule,
    CachorroModule
  ],
  declarations: [GatoHomeComponent]
})
export class GatoModule { }
