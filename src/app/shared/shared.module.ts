import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrosinhaService } from '../services/carrosinha.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ CarrosinhaService ]                       //<<<====here
    };
  }
}