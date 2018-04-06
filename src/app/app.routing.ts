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

const APP_ROUTES : Routes = [
    {path:''  , component:HomeComponent },
    {path:'aluno', component: AlunoComponent},
    {path:'bind', component: DataBindComponent},
    {path:'demanda', component: DemandaComponent},
    {path:'table', component: DatatableNetComponent},
    {path:'grid-detalhes', component: DetailGridComponent},
    {path:'upload', component: UploadComponent},
    {path:'pasta/animals',loadChildren:'app/pasta/home-animal/home-animal.module#HomeAnimalModule'},
    {path:'pasta/cachorro',loadChildren:'app/pasta/cachorro/cachorro.module#CachorroModule'},
    {path:'pasta/gato',loadChildren:'app/pasta/gato/gato.module#GatoModule'},
    {path:'**'  , component:PaginaNaoEncontradaComponent }
]; 
export const routing:ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

//, canActivate:[AuthGuardService]