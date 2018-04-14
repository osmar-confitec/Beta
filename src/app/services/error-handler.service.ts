import { Injectable, ErrorHandler , NgZone } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class ErrorHandlerService extends ErrorHandler {

          constructor(private zone: NgZone) {
            super();
          }
          handleError(error:HttpErrorResponse | any){
              //super.handleError(error);
            let errorMessage:string = `` ;
            if (error instanceof HttpErrorResponse)
            {
              const body  = error.error
              console.log(error);
              errorMessage = ` erro de requisicao http ${error.url} : ${error.status} -  ${error.statusText || '' }  ${body}  `; 
            }else{
              errorMessage =  ` Erro genérico ${error.message ? error.message : error.toString()}  ` ;
            }
            this.zone.run(()=>{
                // aqui é utilizado quando o angular não consiste a alteração da página ou o estado dos eventos 
              console.log(errorMessage)
            })
          
          }

}
