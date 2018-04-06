import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CachorroHomeComponent } from './cachorro-home/cachorro-home.component';
import { routing } from './app.routing';
import { PastaModule } from '../pasta.module';


@NgModule({
  imports: [
    CommonModule,
    routing,
    PastaModule
  ],
  declarations: [CachorroHomeComponent]
})
export class CachorroModule { }
