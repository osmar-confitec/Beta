import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ActiveChild implements CanActivateChild {

  canActivateChild(childRoute: ActivatedRouteSnapshot,
                   state: RouterStateSnapshot):
                    boolean | Observable<boolean> | Promise<boolean> 
  {
          console.log(` guarda de rotas filha ativada.  ` )
          return true;
  }
  constructor() { }

}
