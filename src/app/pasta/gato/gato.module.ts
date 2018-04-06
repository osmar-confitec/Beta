import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GatoHomeComponent } from './gato-home/gato-home.component';
import { routing } from './app.routing';


@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [GatoHomeComponent]
})
export class GatoModule { }
