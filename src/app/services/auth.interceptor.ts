import{ HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpUserEvent} from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/do';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler)
    : Observable<HttpSentEvent 
    | HttpHeaderResponse 
    | HttpProgressEvent 
    | HttpResponse<any> 
    | HttpUserEvent<any>> {

    return next
    .handle(req)
    .do(event => {

       console.log('detective event',event);
        //nothing is printed when a Http failure occurs
        
        if (event instanceof HttpRequest)
        {
          console.log('detecting http requisição');
            // Requisição 

        }
       
        if (event instanceof HttpResponse) {
              console.log('detecting http response');
            //  this.loaderService.hide();
        }
    }, (err: any) => {
            console.log('... error occurred');
            // this.loaderService.hide();
    });

     // let token = `blabla` ;
      // adicionar quando o usuario está logado 
/*       const authrequest = 
              req.clone({ setHeaders: { 'Authorization':`Bearer ${token}` } }); */

     /*  return next.handle(authrequest); */
    
      // segue com a requisicao 
   /*    console.log('passei por aqui ' , req);  
      return next.handle(req); */
    }
}
