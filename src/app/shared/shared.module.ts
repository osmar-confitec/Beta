import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrosinhaService } from '../services/carrosinha.service';
import { AuthService } from '../services/auth.service';
import { AuthGuard } from '../guard/auth-guard.guard';

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
      providers: [ CarrosinhaService ,AuthGuard, AuthService ]                       //<<<====here
    };
  }
}