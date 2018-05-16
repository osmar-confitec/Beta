import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{  BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AlunoComponent } from './aluno/aluno.component';
import { AlfabetoComponent } from './alfabeto/alfabeto.component';
import { routing } from './app.routing';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { HomeComponent } from './home/home.component';
import { SequenciaNomeAComponent } from './sequencia-nome-a/sequencia-nome-a.component';
import { SequenciaNomeBComponent } from './sequencia-nome-b/sequencia-nome-b.component';
import { BroadcastServiceService } from './services/broadcast-service.service';
import { InputsgeneratesComponent } from './inputsgenerates/inputsgenerates.component';
import { BroadcastBooleanoService } from './services/broadcast-booleano.service';
import { Inputsgenerates2Component } from './inputsgenerates2/inputsgenerates2.component';
import { DataBindComponent } from './data-bind/data-bind.component';
import { EnderecoComponent } from './endereco/endereco.component';
import { EnderecosComponent } from './enderecos/enderecos.component';
import { DemandaComponent } from './demanda/demanda.component';
import { FiltrosDemandaComponent } from './filtros-demanda/filtros-demanda.component';
import { PrimeiraGridDemandaComponent } from './primeira-grid-demanda/primeira-grid-demanda.component';
import { SegundaGridDemandaComponent } from './segunda-grid-demanda/segunda-grid-demanda.component';
import { DatatableNetComponent } from './datatable-net/datatable-net.component';
import { FundoAmareloDirective } from './Diretivas/fundo-amarelo.directive';
import { HighlightMouseDirective } from './Diretivas/highlight-mouse.directive';
import { HighlightDirective } from './Diretivas/highlight.directive';
import { DetailGridComponent } from './detail-grid/detail-grid.component';
import { CamelCasePipe } from './pipe/camel-case.pipe';
import { FiltroArrayPipe } from './pipe/filtro-array.pipe';
import { BtntestComponent } from './btntest/btntest.component';
import { PaginationComponent } from './pagination/pagination.component';
import { MyCurrencyFormatterDirective } from './Diretivas/my-currency-formatter.directive';
import { MoedaPipePipe } from './pipe/moeda-pipe.pipe';
import { CpfPipePipe } from './pipe/cpf-pipe.pipe';
import { CnpjPipePipe } from './pipe/cnpj-pipe.pipe';
import { TelefonePipePipe } from './pipe/telefone-pipe.pipe';
import { CpfDiretivaDirective } from './Diretivas/cpf-diretiva.directive';
import { CnpjDiretivaDirective } from './Diretivas/cnpj-diretiva.directive';
import { ScriptLoaderServiceService } from './services/script-loader-service.service';
import { UploadComponent } from './upload/upload.component';
import { FileSelectDirective , FileUploadModule } from 'ng2-file-upload';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './login/login.component';
import { ProfessorModule } from './professor/professor.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ModalBootstrapComponent } from './modal-bootstrap/modal-bootstrap.component';
import { StructuralDirectiveLearnTemplateRefandViewContainerRefComponent } from './structural-directive-learn-template-refand-view-container-ref/structural-directive-learn-template-refand-view-container-ref.component';
import { StruturalDirective } from './strutural.directive';
import { CorpoModalComponent } from './corpo-modal/corpo-modal.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DomManipulationComponent } from './dom-manipulation/dom-manipulation.component';

import { ModalBootstrapRealComponent } from './modal-bootstrap-real/modal-bootstrap-real.component';
import { ViewconteinerRefComponent } from './viewconteiner-ref/viewconteiner-ref.component';
import { AlertComponent } from './alert/alert.component';
import { TodoComponent } from './todo/todo.component';
import { TodoInputComponent } from './todo-input/todo-input.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { JokeComponent } from './joke/joke.component';
import { JokeListComponent } from './joke-list/joke-list.component';
import { MoedaBrasileiraDirective } from './Diretivas/moeda-brasileira.directive';
import { TextMaskModule } from 'angular2-text-mask';
import { DropdownComponent } from './dropdown/dropdown.component';
import { UploadComponentConfitecComponent } from './upload-component-confitec/upload-component-confitec.component';
import { MoedaFinalBrDirective } from './Diretivas/moeda-final-br.directive';

@NgModule({
  declarations: [
    
    
    AppComponent,
    AlunoComponent,
    AlfabetoComponent,
    PaginaNaoEncontradaComponent,
    HomeComponent,
    SequenciaNomeAComponent,
    SequenciaNomeBComponent,
    InputsgeneratesComponent,
    Inputsgenerates2Component,
    DataBindComponent,
    EnderecoComponent,
    EnderecosComponent,
    DemandaComponent,
    FiltrosDemandaComponent,
    PrimeiraGridDemandaComponent,
    SegundaGridDemandaComponent,
    DatatableNetComponent,
    FundoAmareloDirective,
    HighlightMouseDirective,
    HighlightDirective,
    DetailGridComponent,
    CamelCasePipe,
    FiltroArrayPipe,
    BtntestComponent,
    PaginationComponent,
    MyCurrencyFormatterDirective,
    MoedaPipePipe,
    CpfPipePipe,
    CnpjPipePipe,
    TelefonePipePipe,
    CpfDiretivaDirective,
    CnpjDiretivaDirective,
    UploadComponent,
    LoginComponent,
    FileUploadComponent,
    ModalBootstrapComponent,
    StructuralDirectiveLearnTemplateRefandViewContainerRefComponent,
    StruturalDirective,
    CorpoModalComponent,
    ModalBootstrapRealComponent,
    ViewconteinerRefComponent,
    AlertComponent,
    TodoComponent,
    TodoInputComponent,
    TodoFooterComponent,
    JokeComponent,
    JokeListComponent,
    DomManipulationComponent,
    MoedaBrasileiraDirective,
    DropdownComponent,
    UploadComponentConfitecComponent,
    MoedaFinalBrDirective
    
  ],
  imports: [
    HttpClientModule,
    ProfessorModule,
    FileUploadModule,
    BrowserModule,
    SharedModule.forRoot(),
    NgbModule.forRoot(),
    routing,
    FormsModule,
    BrowserAnimationsModule ,
    TextMaskModule
  ],
  providers: [BroadcastServiceService,BroadcastBooleanoService,ScriptLoaderServiceService],
  bootstrap: [AppComponent],
  exports:[ModalBootstrapRealComponent]
})
export class AppModule { }
