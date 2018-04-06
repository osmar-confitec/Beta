import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CachorroHomeComponent } from './cachorro-home/cachorro-home.component';
import { routing } from './app.routing';


@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [CachorroHomeComponent]
})
export class CachorroModule { }
