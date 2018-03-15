import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    EnderecoComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],
  providers: [BroadcastServiceService,BroadcastBooleanoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
