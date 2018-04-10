import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { BroadcastBooleanoService } from '../services/broadcast-booleano.service';
import { EnderecoModel } from '../endereco/models/endereco-model';


import * as $ from 'jquery';
import 'datatables.net'

import   'assets/maskplugin.js' ;


import { Book } from './models/book';
import { Ipage } from '../pagination/interface/ipage';

import { Calculator , test } from './models/Calculator'
import { ScriptLoaderServiceService } from '../services/script-loader-service.service';








@Component({
  selector: 'project-B-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements
AfterViewChecked,
OnDestroy,
AfterViewInit ,  OnInit , OnChanges , DoCheck , AfterContentInit , AfterContentChecked {

  ngOnDestroy(): void {
    console.log(` ngOnDestroy `)
  }
  ngAfterViewChecked(): void {
    console.log(` ngAfterViewChecked `)
  }
  ngAfterContentChecked(): void {
    console.log(` ngAfterContentChecked `)
  }
  ngAfterContentInit(): void {
    console.log(` AfterContentInit `)
  }
  ngDoCheck(): void {
    console.log(` ngDoCheck `)
  }
  ngOnChanges(changes: SimpleChanges): void {
   
    console.log(` Onchanges ${ console.dir(changes)} `)

  }
  Rodarjs(){

    let pad = new Padronizada();
    pad.Func();
  }

  promessa():Promise<{}>{
      return new Promise((resolve,reject)=>{
          window.setTimeout(resolve.bind(null, 10), 3000);
      })
  }


  cumprindoPromessa(){

    this.promessa().then(function(value) {
      console.log(value); // Will print 10 after 100ms.
     });
  }

  importarjs(){

    this.serviceLoadScript.load({name:`alertify`,src:`assets/alertify.js`,loaded:false,reason:''});
    

/*  console.log('preparing to load...')
        let node = document.createElement('script');
        node.src = `assets/Padronizada.js`;
        node.type = 'text/javascript';
        node.async = true;
        node.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(node); */
  
  }

  cpfValor:string  = '21371885893';
  mostrarDiv:boolean = false;
  paginationprop:Ipage ={

    currentPage : 1,
    totalRegisters:500,
    qtdRegisterPage:10,
    totalPages:0,
    pages:[]

  };

  onReceberPager(pages:Ipage)
  {
      console.log(pages);
  }

  tratarPaginacao() {
    let qtdRegisterPage = 10;
    this.paginationprop.pages = [];
    this.paginationprop.totalPages = Math.ceil(this.paginationprop.totalRegisters / qtdRegisterPage);
    let startPage: number, endPage: number;
    //se for menor ou igual a 10 show all 
    if (this.paginationprop.totalPages <= 10) {
      startPage = 1;
      endPage = this.paginationprop.totalPages;
    }
    else {
      // more than 10 total pages so calculate start and end pages
      if (this.paginationprop.currentPage <= 6) {
        startPage = 1;
        endPage = 10;
      } else if (this.paginationprop.currentPage + 4 >= this.paginationprop.totalPages) {
        startPage = this.paginationprop.totalPages - 9;
        endPage = this.paginationprop.totalPages;
      } else {
        startPage = this.paginationprop.currentPage - 5;
        endPage = this.paginationprop.currentPage + 4;
      }
    }

    // calculate start and end item indexes
    let startIndex = (this.paginationprop.currentPage - 1) * qtdRegisterPage;
    let endIndex = Math.min(startIndex + qtdRegisterPage - 1, this.paginationprop.totalRegisters - 1);

    for (let i = startPage; i < (endPage + 1); i++) {
      this.paginationprop.pages.push({
        description: i.toString(),
        numberPage: i,
        currentPage: i == this.paginationprop.currentPage ? true : false
      });
    }
  }

  consultarNovamente(){

    this.paginationprop = {

      currentPage : 1,
      totalRegisters:500,
      qtdRegisterPage:10,
      totalPages:0,
      pages:[]
  
    };
    this.tratarPaginacao();
  }

public tableWidget: any;

  ngAfterViewInit() {

    console.log(` ngAfterViewInit `)
    this.initDatatable();
 



   let cf:any =  $('#mascarado');
   cf.mask('99/99/9999');
  }
  
  private initDatatable(): void {
    debugger
    let exampleId: any = $('#example');
    this.tableWidget = exampleId.DataTable({
      select: true
    });
  //   $('#example')
  //     .removeClass('display')
  //     .addClass('table table-striped table-bordered')
  }

  public boolvalue: boolean = false;

  public data =
    [
      {
        "name": "Anna",
        "lastName": "Konda"
      },
      {
        "name": "Anna",
        "lastName": "Konda"
      },
      {
        "name": "Anna",
        "lastName": "Konda"
      },
      {
        "name": "Anna",
        "lastName": "Konda"
      },
      {
        "name": "Anna",
        "lastName": "Konda"
      },
      {
        "name": "Anna",
        "lastName": "Konda"
      },
      {
        "name": "Anna",
        "lastName": "Konda"
      },
      {
        "name": "Anna",
        "lastName": "Konda"
      },
      {
        "name": "Anna",
        "lastName": "Konda"
      },
      {
        "name": "Anna",
        "lastName": "Konda"
      },
      {
        "name": "Anna",
        "lastName": "Konda"
      },
      {
        "name": "Anna",
        "lastName": "Konda"
      },
      {
        "name": "Anna",
        "lastName": "Konda"
      },
      {
        "name": "Anna",
        "lastName": "Konda"
      },
      {
        "name": "Anna",
        "lastName": "Konda"
      },
      {
        "name": "Anna",
        "lastName": "Konda"
      },
      {
        "name": "Anna",
        "lastName": "Konda"
      },
      {
        "name": "Anna",
        "lastName": "Konda"
      },
      {
        "name": "Anna",
        "lastName": "Konda"
      },
      {
        "name": "Anna",
        "lastName": "Konda"
      },
      {
        "name": "Anna",
        "lastName": "Konda"
      },
      {
        "name": "Anna",
        "lastName": "Konda"
      },
      {
        "name": "Anna",
        "lastName": "Konda"
      },
      {
        "name": "Anna",
        "lastName": "Konda"
      },
      {
        "name": "Anna",
        "lastName": "Konda"
      },
      {
        "name": "Anna",
        "lastName": "Konda"
      },
      {
        "name": "Anna",
        "lastName": "Konda"
      },
      {
        "name": "Anna",
        "lastName": "Konda"
      },
      {
        "name": "Anna",
        "lastName": "Konda"
      },
      {
        "name": "Anna",
        "lastName": "Konda"
      },
      {
        "name": "Anna",
        "lastName": "Konda"
      },
      {
        "name": "Anna",
        "lastName": "Konda"
      },
      {
        "name": "Anna",
        "lastName": "Konda"
      },
      {
        "name": "Anna",
        "lastName": "Konda"
      },
      {
        "name": "Anna",
        "lastName": "Konda"
      },
      {
        "name": "Anna",
        "lastName": "Konda"
      },
      {
        "name": "Anna",
        "lastName": "Konda"
      },
      {
        "name": "Anna",
        "lastName": "Konda"
      },
      {
        "name": "Anna",
        "lastName": "Konda"
      },
      {
        "name": "Anna",
        "lastName": "Konda"
      },
      {
        "name": "Anna",
        "lastName": "Konda"
      },
      {
        "name": "Anna",
        "lastName": "Konda"
      },
      {
        "name": "Anna",
        "lastName": "Konda"
      },
      {
        "name": "Anna",
        "lastName": "Konda"
      },
      {
        "name": "Anna",
        "lastName": "Konda"
      },
      {
        "name": "Anna",
        "lastName": "Konda"
      },
      {
        "name": "Anna",
        "lastName": "Konda"
      },
      {
        "name": "Anna",
        "lastName": "Konda"
      },
      {
        "name": "Anna",
        "lastName": "Konda"
      },
      {
        "name": "Anna",
        "lastName": "Konda"
      },
      {
        "name": "Anna",
        "lastName": "Konda"
      },
      {
        "name": "Anna",
        "lastName": "Konda"
      },
      {
        "name": "Anna",
        "lastName": "Konda"
      },
      {
        "name": "Anna",
        "lastName": "Konda"
      },
      {
        "name": "Anna",
        "lastName": "Konda"
      },
      {
        "name": "Anna",
        "lastName": "Konda"
      },
      {
        "name": "Anna",
        "lastName": "Konda"
      },
      {
        "name": "Anna",
        "lastName": "Konda"
      },
      {
        "name": "Anna",
        "lastName": "Konda"
      },
      {
        "name": "Anna",
        "lastName": "Konda"
      },
      {
        "name": "Wayne",
        "lastName": "Interessierts"
      }];

  livro: Book = new Book();
  listLivros:Array<Book> = [
    {
      titulo:'Livro',

     estrelas:10,
      paginas:350,
      preco:10.50,
      datalancamento:new Date(),
      urlLivro:'Google '
    },
    {
      titulo:'As sereias',

     estrelas:10,
      paginas:350,
      preco:10.50,
      datalancamento:new Date(),
      urlLivro:'Google '
    },
    {
      titulo:'Os brazucas',

     estrelas:10,
      paginas:350,
      preco:10.50,
      datalancamento:new Date(),
      urlLivro:'Google '
    }, 
    {
      titulo:'O malvino',

     estrelas:10,
      paginas:350,
      preco:10.50,
      datalancamento:new Date(),
      urlLivro:'Google '
    }
  ];

  @ViewChild('txtElementAlterMore') txtElementAlterMore: ElementRef;

  alterarInput() {
    let valor = jQuery('#txtnome').val();
    jQuery('#txtnome').css("background-color", "yellow");
    console.log(valor);
    // console.log(this.txtElementAlterMore);
    this.txtElementAlterMore.nativeElement.value = 10;

  }

  constructor(private service: BroadcastBooleanoService ,
              private serviceLoadScript:ScriptLoaderServiceService) {


  }

  onRecebeuEndereco(valor) {
    console.dir(valor);
  }

  addprop1(e) {

    if (this.boolvalue) {
      this.service.onChange(false);
      this.boolvalue = false;
    }

    else {
      this.service.onChange(true);
      this.boolvalue = true;

    }


  }

  resultadoSomatoria(resultado)
  {
    console.log(  ` resultado somatoria ${resultado} ` );
  }

  ngOnInit() {

    
    let der =  new  PrayTimes(); 
    console.dir(der.getTimes(new Date(), [43, -80], -5)); 
   // let valortestado:any =    PrayTimes
   // console.log(valortestado);
    this.livro.datalancamento = new Date(2016, 5, 23);


    this.livro.estrelas = 5.555;
    this.livro.titulo = ' O encantar das baleias  ';
    this.livro.paginas = 135;
    this.livro.preco = 1500.33;
    this.livro.urlLivro = 'https://www.google.com/';

  }

}
