import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {


  // De acordo com o retorno pode ser true ou false 
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
                    : boolean | Observable<boolean> | Promise<boolean> 
  {
    console.dir(route);
    console.dir(state);
      let resultRouter = this.auth.usuarioAuthenticado(state.url.replace('/',''));
      if (!resultRouter)
          this.router.navigate(['/login']);
      return resultRouter;
  }
  constructor(private auth:AuthService , private router:Router) {

   }



}
