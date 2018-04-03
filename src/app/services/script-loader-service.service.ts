import { Injectable } from '@angular/core';
import { ScriptModel } from '../Models/script-model';
/* import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer'; */

@Injectable()
export class ScriptLoaderServiceService {

  private scriptsLoad: ScriptModel[] = [];
  load(...scripts: ScriptModel[]) {
    var promises: any[] = [];
    scripts.forEach((script) => promises.push(this.loadScript(script)));
    Promise.all(promises).then();

  }

  loadPromisse(...scripts: ScriptModel[]) {
    var promises: any[] = [];
    scripts.forEach((script) => promises.push(this.loadScript(script)));
    return Promise.all(promises);
  }

  addScript(model: ScriptModel) {

    console.log('preparing to load...');
    let node = null;
    node = document.createElement('script');
    node.src = model.src;
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);

  }
  aceptscript(model: ScriptModel) {
    model.loaded = true;
    this.addScript(model);
    this.scriptsLoad.push(model);
  }
  loadScript(model: ScriptModel) {
    return new Promise((resolve, reject) => {
      let scriptencontrado = false;
      if (this.scriptsLoad.length <= 0) {
        this.aceptscript(model);
        resolve(model);
        return
      }
      for (let index in this.scriptsLoad) {
        if (this.scriptsLoad[index].name === model.name) {
          scriptencontrado = true;
          break;
        }
      }
      if (!scriptencontrado) {
        this.aceptscript(model);
        resolve(model);
      }
      else{
        console.log( ` script já lido ` )
        model.reason = ` script já lido ` ;
        resolve(model);
      }
        
    });
  }
}
