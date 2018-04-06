import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CachorroHomeComponent } from "./cachorro-home/cachorro-home.component";



const APP_ROUTES : Routes = [
    
    {path:''  , component:CachorroHomeComponent }
]; 
export const routing:ModuleWithProviders = RouterModule.forChild(APP_ROUTES);