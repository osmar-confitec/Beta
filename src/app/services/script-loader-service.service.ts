import { Injectable } from '@angular/core';
import { ScriptModel } from '../Models/script-model';
/* import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer'; */

@Injectable()
export class ScriptLoaderServiceService {

  private scriptsLoad: ScriptModel[] = [];
  load(scripts: ScriptModel[]) {

     var promises: any[] = [];
     scripts.forEach((script) => promises.push(this.loadScript(script)));
     Promise.all(promises).then( resp =>{
      resp.map(response => console.dir(response));
          //this.scriptsLoad.push(resp)
     });

 }


 loadScript(model: ScriptModel) {
  return new Promise((resolve, reject) => {
        let encontrado = false;
        if (this.scriptsLoad.length <=0)
            resolve({name:model.name,src:model.src,loaded:false});
        for(let index in this.scriptsLoad )
        {
              if (this.scriptsLoad[index].loaded)
                  reject({name:model.name,src:model.src,loaded:true});
              else 
                 resolve({name:model.name,src:model.src,loaded:false});
        }

  });
 }

 // public load(script: ScriptModel):void  {
 // public load(script: ScriptModel): Observable<ScriptModel> {
   /*  return new Observable<ScriptModel>((observer: Observer<ScriptModel>) => {
      let existingScript: ScriptModel = null;
      this.scripts.forEach((x: ScriptModel) => {
        if (x.name === script.name)
          existingScript = x;
      });

      // Complete if already loaded
      if (existingScript && existingScript.loaded) {
        observer.next(existingScript);
        observer.complete();
      }
      else {
        // Add the script
        this.scripts = [...this.scripts, script];

        // Load the script
        let scriptElement = document.createElement("script");
        scriptElement.type = "text/javascript";
        scriptElement.src = script.src;

        scriptElement.onload = () => {
          script.loaded = true;
          observer.next(script);
          observer.complete();
        };

        scriptElement.onerror = (error: any) => {
          observer.error("Couldn't load script " + script.src);
        };

        document.getElementsByTagName('body')[0].appendChild(scriptElement);
      }
    }); */
 // }

}
