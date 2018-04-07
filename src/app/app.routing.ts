import { Routes, RouterModule  } from '@angular/router';

import { ModuleWithProviders } from '@angular/core';
import { AlunoComponent } from './aluno/aluno.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { HomeComponent } from './home/home.component';
import { DataBindComponent } from './data-bind/data-bind.component';
import { DemandaComponent } from './demanda/demanda.component';
import { DatatableNetComponent } from './datatable-net/datatable-net.component';
import { DetailGridComponent } from './detail-grid/detail-grid.component';
import { UploadComponent } from './upload/upload.component';
import { AuthGuard } from './guard/auth-guard.guard';
import { LoginComponent } from './login/login.component';

const APP_ROUTES : Routes = [
    {path:''  , component:HomeComponent , canActivate:[AuthGuard] },
    {path:'aluno', component: AlunoComponent , canActivate:[AuthGuard]},
    {path:'login', component: LoginComponent },
    {path:'bind', component: DataBindComponent , canActivate:[AuthGuard]},
    {path:'demanda', component: DemandaComponent , canActivate:[AuthGuard]},
    {path:'table', component: DatatableNetComponent , canActivate:[AuthGuard]},
    {path:'grid-detalhes', component: DetailGridComponent , canActivate:[AuthGuard]},
    {path:'upload', component: UploadComponent , canActivate:[AuthGuard]},
    {path:'pasta/animals',loadChildren:'app/pasta/home-animal/home-animal.module#HomeAnimalModule' , canActivate:[AuthGuard]},
    {path:'pasta/cachorro',loadChildren:'app/pasta/cachorro/cachorro.module#CachorroModule' , canActivate:[AuthGuard]},
    {path:'pasta/gato',loadChildren:'app/pasta/gato/gato.module#GatoModule' , canActivate:[AuthGuard]},
    {path:'**'  , component:PaginaNaoEncontradaComponent}
]; 
export const routing:ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

//, canActivate:[AuthGuardService]