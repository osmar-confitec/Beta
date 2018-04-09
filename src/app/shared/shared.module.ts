import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrosinhaService } from '../services/carrosinha.service';
import { AuthService } from '../services/auth.service';
import { AuthGuard } from '../guard/auth-guard.guard';
import { ActiveChild } from '../guard/active-child.guard';
import { Deactivaded } from '../guard/deactivaded.guard';
import { ResolveGuard } from '../guard/resolve-guard.guard';
import { GuardLoad } from '../guard/guard-load.guard';
import { FornecedorService } from '../services/fornecedor.service';

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
      providers: [FornecedorService, ResolveGuard, CarrosinhaService ,AuthGuard, AuthService , ActiveChild, Deactivaded,GuardLoad ]                       //<<<====here
    };
  }
}