import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, TemplateRef, Injector, ComponentFactoryResolver, ViewContainerRef, ViewRef } from '@angular/core';
import { AlunoComponent } from '../aluno/aluno.component';

@Component({
  selector: 'project-B-dom-manipulation',
  templateUrl: './dom-manipulation.component.html',
  styleUrls: ['./dom-manipulation.component.css']
})
export class DomManipulationComponent implements OnInit , AfterViewInit  {
  viewre:ViewRef;
  @ViewChild("tref", {read: ElementRef}) tref: ElementRef;
  @ViewChild("tpl") tpl: TemplateRef<any>;

/*   @ViewChild('container', { read: ViewContainerRef }) _vcr;
  @ViewChild('tpl') tpl; */

  @ViewChild("vc", {read: ViewContainerRef}) vc: ViewContainerRef;

  ngAfterViewInit(): void {
  // https://angular.io/guide/dynamic-component-loader
   /*  let view = this.tpl.createEmbeddedView(null);
    let elementRef = this.tpl.elementRef;
    this.vc.insert(this.viewre) */
   
   // this.vc.insert(view)
    // outputs `template bindings={}`
  //  console.log(elementRef.nativeElement.textContent);
    // outputs `I am span`
   /*  console.log(this.tref.nativeElement.textContent);

    console.log(this.vc.element.nativeElement.textContent); */

  
  }

  
/* 2
down vote
accepted
in template:

<ng-template #yourComponentHost></ng-template>
in component:

@ViewChild('yourComponentHost', { read: ViewContainerRef })
  yourComponentHost;
.
.
.
const componentFactory = this._componentFactoryResolver.resolveComponentFactory(YourComponentType1);
    const viewContainerRef = this.yourComponentHost;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);

    const yourComponentType1Instance = (<YourComponentType1>componentRef.instance); */

  constructor(
    private injector: Injector,
            private r: ComponentFactoryResolver,
    private hostElement: ElementRef) { 

   /*  console.log(this.hostElement.nativeElement.outerHTML);

    let factory = this.r.resolveComponentFactory(AlunoComponent);
    let componentRef = factory.create(injector);
    componentRef.instance.mensagemPagina =  ` Essa mensagem está descolada `
    
  this.viewre = componentRef.hostView; */
  

  }



  ngOnInit() {
    let componentFactory = this.r.resolveComponentFactory(AlunoComponent);
    let mycomp =  this.vc.createComponent(componentFactory);
    (<AlunoComponent>mycomp.instance).mensagemPagina = `Bicho de Pé`;
  }

}
