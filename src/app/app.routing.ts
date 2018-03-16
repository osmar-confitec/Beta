import { Routes, RouterModule  } from '@angular/router';

import { ModuleWithProviders } from '@angular/core';
import { AlunoComponent } from './aluno/aluno.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { HomeComponent } from './home/home.component';
import { DataBindComponent } from './data-bind/data-bind.component';
import { DemandaComponent } from './demanda/demanda.component';

const APP_ROUTES : Routes = [
    {path:''  , component:HomeComponent },
    {path:'aluno', component: AlunoComponent},
    {path:'bind', component: DataBindComponent},
    {path:'demanda', component: DemandaComponent},
    {path:'**'  , component:PaginaNaoEncontradaComponent }
]; 
export const routing:ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

//, canActivate:[AuthGuardService]