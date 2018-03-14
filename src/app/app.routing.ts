import { Routes, RouterModule  } from '@angular/router';

import { ModuleWithProviders } from '@angular/core';
import { AlunoComponent } from './aluno/aluno.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { HomeComponent } from './home/home.component';

const APP_ROUTES : Routes = [
    {path:''  , component:HomeComponent },
    {path:'aluno', component: AlunoComponent},
    {path:'**'  , component:PaginaNaoEncontradaComponent }
   
        
]; 
export const routing:ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

//, canActivate:[AuthGuardService]