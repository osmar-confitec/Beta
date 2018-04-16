import { Routes, RouterModule } from '@angular/router';

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
import { ProfessorListComponent } from './professor/professor-list/professor-list.component';
import { ProfessorInsertComponent } from './professor/professor-insert/professor-insert.component';
import { ProfessorUpdateComponent } from './professor/professor-update/professor-update.component';
import { Deactivaded } from './guard/deactivaded.guard';
import { ResolveGuard } from './guard/resolve-guard.guard';
import { GuardLoad } from './guard/guard-load.guard';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'aluno', component: AlunoComponent, canActivate: [AuthGuard], canDeactivate:[Deactivaded], 
    resolve: { usuario:ResolveGuard } },
    { path: 'login', component: LoginComponent },
    
    { path: 'bind', component: DataBindComponent, canActivate: [AuthGuard] },
    { path: 'demanda', component: DemandaComponent, canActivate: [AuthGuard] },
    { path: 'table', component: DatatableNetComponent, canActivate: [AuthGuard] },
    { path: 'grid-detalhes', component: DetailGridComponent, canActivate: [AuthGuard] },
    //{ path: 'upload', component: UploadComponent, canActivate: [AuthGuard] },
    { path: 'upload', component: UploadComponent },
    { path: 'animals', loadChildren: 'app/pasta/home-animal/home-animal.module#HomeAnimalModule', canActivate: [AuthGuard] },
    { path: 'fornecedor', loadChildren: 'app/fornecedor-crud/fornecedor-crud.module#FornecedorCrudModule' },
    { path: 'cachorro', loadChildren: 'app/pasta/cachorro/cachorro.module#CachorroModule', canActivate: [AuthGuard] },
    { path: 'gato', loadChildren: 'app/pasta/gato/gato.module#GatoModule', canLoad:[GuardLoad] },
    { path: '**', component: PaginaNaoEncontradaComponent }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

//, canActivate:[AuthGuardService]