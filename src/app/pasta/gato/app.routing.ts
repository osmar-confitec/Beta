import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GatoHomeComponent } from "./gato-home/gato-home.component";


const APP_ROUTES : Routes = [
    
    {path:''  , component:GatoHomeComponent }
]; 
export const routing:ModuleWithProviders = RouterModule.forChild(APP_ROUTES);