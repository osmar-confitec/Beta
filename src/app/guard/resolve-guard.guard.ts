import { Injectable, forwardRef, Inject } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { UsuarioSystem } from '../Models/usuario-system';
import { AuthService } from '../services/auth.service';

@Injectable()
export class ResolveGuard implements Resolve<UsuarioSystem>
  {

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  : UsuarioSystem | Observable<UsuarioSystem> | Promise<UsuarioSystem> {
     let user = this.usuarioResolv.obterUsuario();
     return user;
  }
  constructor(private usuarioResolv:AuthService) { }

}
