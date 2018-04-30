import { NgModule, ModuleWithProviders, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrosinhaService } from '../services/carrosinha.service';
import { AuthService } from '../services/auth.service';
import { AuthGuard } from '../guard/auth-guard.guard';
import { ActiveChild } from '../guard/active-child.guard';
import { Deactivaded } from '../guard/deactivaded.guard';
import { ResolveGuard } from '../guard/resolve-guard.guard';
import { GuardLoad } from '../guard/guard-load.guard';
import { FornecedorService } from '../services/fornecedor.service';
import {HTTP_INTERCEPTORS} from  '@angular/common/http';
import { AuthInterceptor } from '../services/auth.interceptor';
import { ErrorHandlerService } from '../services/error-handler.service';
import { UtilitariosSystemService } from '../services/utilitarios-system.service';
import { TodoList } from '../services/todo-list';


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
      providers: [
        TodoList,
        {provide: ErrorHandler,useClass:ErrorHandlerService},
        {provide:HTTP_INTERCEPTORS, useClass: AuthInterceptor,multi :true},
                   FornecedorService,
                   ResolveGuard,
                   UtilitariosSystemService,
                   CarrosinhaService,
                   AuthGuard, AuthService , ActiveChild, Deactivaded,GuardLoad ]                       //<<<====here
    };
  }
}