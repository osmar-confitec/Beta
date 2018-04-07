import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessorInsertComponent } from './professor-insert/professor-insert.component';
import { ProfessorUpdateComponent } from './professor-update/professor-update.component';
import { ProfessorListComponent } from './professor-list/professor-list.component';
import { ProfessorGridComponent } from './professor-grid/professor-grid.component';
import { routing } from './app.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [ProfessorInsertComponent, ProfessorUpdateComponent, ProfessorListComponent, ProfessorGridComponent]
})
export class ProfessorModule { }
