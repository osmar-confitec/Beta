import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AlunoComponent } from '../aluno/aluno.component';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class Deactivaded implements CanDeactivate<AlunoComponent> {

  canDeactivate( component: AlunoComponent,
                 currentRoute: ActivatedRouteSnapshot, 
                 currentState: RouterStateSnapshot,
                  nextState?: RouterStateSnapshot)
                  : boolean | Observable<boolean> | Promise<boolean> {


                    console.dir(component);
                    console.dir(currentRoute);
                    console.dir(currentState);
                    console.dir(nextState);
    return true;
  }
  constructor() { }

}
