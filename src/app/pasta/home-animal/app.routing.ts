import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePrincipalComponent } from "./home-principal/home-principal.component";

const APP_ROUTES : Routes = [
    
    {path:''  , component:HomePrincipalComponent }
]; 
export const routing:ModuleWithProviders = RouterModule.forChild(APP_ROUTES);