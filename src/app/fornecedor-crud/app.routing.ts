import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FornecedorListComponent } from "./fornecedor-list/fornecedor-list.component";
import { FornecedorNovoComponent } from "./fornecedor-novo/fornecedor-novo.component";
import { FornecedorEditComponent } from "./fornecedor-edit/fornecedor-edit.component";
import { FornecedorDeleteComponent } from "./fornecedor-delete/fornecedor-delete.component";


const APP_ROUTES : Routes = [
    
    {path: '', component: FornecedorListComponent},
    {path: 'fornecedor-novo', component: FornecedorNovoComponent},
    {path: 'fornecedor-edit', component: FornecedorEditComponent},
    {path: 'fornecedor-delete', component: FornecedorDeleteComponent}

]; 
export const routing:ModuleWithProviders = RouterModule.forChild(APP_ROUTES);