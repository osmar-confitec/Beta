import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FornecedorListComponent } from './fornecedor-list/fornecedor-list.component';
import { FornecedorNovoComponent } from './fornecedor-novo/fornecedor-novo.component';
import { FornecedorEditComponent } from './fornecedor-edit/fornecedor-edit.component';
import { FornecedorDeleteComponent } from './fornecedor-delete/fornecedor-delete.component';
import { routing } from './app.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [FornecedorListComponent, FornecedorNovoComponent, FornecedorEditComponent, FornecedorDeleteComponent]
})
export class FornecedorCrudModule { }
