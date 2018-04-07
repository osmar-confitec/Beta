import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';

@Injectable()
export class GuardLoad implements CanLoad {
// guarda de rota utilizadas em lazy loading 
// vai entrar nessa rota apenas uma vez quando faz o loading da rota.
  canLoad(route: Route):
       boolean | Observable<boolean> 
               | Promise<boolean> 
               {
                console.log(' rota load ');    
                console.dir(route);
                return true;
               
                  /* let resultRouter = this.auth.usuarioAuthenticado(state.url.replace('/',''));
                  if (!resultRouter)
                      this.router.navigate(['/login']);
                  return resultRouter; */
  }
  // guarda utilizada permitindo não carregar o módulo se não tiver permissão 

  constructor(private auth:AuthService , private router:Router) {

  }



}
