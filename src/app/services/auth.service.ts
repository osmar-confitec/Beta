import { Injectable } from '@angular/core';
import { UsuarioSystem } from '../Models/usuario-system';

@Injectable()
export class AuthService {

  usuarioSystem: UsuarioSystem;

  usuarioAuthenticado(rota:string):boolean{
      return this.usuarioSystem.rotas.find(x=>x.ativa && x.nomeRota === rota ) !== undefined;
  }

  obterUsuario():UsuarioSystem{
    return  this.usuarioSystem;
  }

  constructor() {


    this.usuarioSystem = new UsuarioSystem();
    this.usuarioSystem.nomeUsuario = ` Osmar Gonçalves Vieira `;
    this.usuarioSystem.rotas = [
      {
        nomeRota: 'aluno',
        ativa: true
      },
      {
        nomeRota: '',
        ativa: true
      },
      {
        nomeRota: 'table',
        ativa: true
      },
      {
        nomeRota: 'grid-detalhes',
        ativa: false
      }
    ];

  }

}
