import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GatoHomeComponent } from "./gato-home/gato-home.component";


const APP_ROUTES : Routes = [
    
    {path:'home-gato'  , component:GatoHomeComponent }
]; 
export const routingGato:ModuleWithProviders = RouterModule.forChild(APP_ROUTES);