import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProfessorListComponent } from "./professor-list/professor-list.component";
import { ProfessorInsertComponent } from "./professor-insert/professor-insert.component";
import { ProfessorUpdateComponent } from "./professor-update/professor-update.component";
import { ActiveChild } from "../guard/active-child.guard";


const APP_ROUTES : Routes = [
    
    {
        path: 'professor', component: ProfessorListComponent,
        
        canActivateChild:[ActiveChild],
        children: [
                    {path:'novo',component:ProfessorInsertComponent},
                    {path:':id',component:ProfessorUpdateComponent}
        ]
    }
]; 
export const routing:ModuleWithProviders = RouterModule.forChild(APP_ROUTES);