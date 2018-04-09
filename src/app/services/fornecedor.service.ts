import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Fornecedor } from '../Models/fornecedor';
import { Observable } from 'rxjs/Observable';
import { environment }  from '../../environments/environment';
@Injectable()
export class FornecedorService {

  
  private _url : string;
  public get url() : string {
    return environment.api +  this._url;
  }
  
  

  constructor(private http:HttpClient) { }

  SalvarFornecedor(forn:Fornecedor):Observable<Fornecedor>{
         return this.http.post<Fornecedor>(this.url,forn);
  }

}
