import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePrincipalComponent } from './home-principal/home-principal.component';
import { routing } from './app.routing';
import { CarrosinhaService } from '../../services/carrosinha.service';


@NgModule({
  imports: [
    CommonModule,
    routing
    
  ],
  declarations: [HomePrincipalComponent]
})
export class HomeAnimalModule { }
