
import { Modelo } from './../dropdown/modelo';
import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChildren, QueryList, ViewContainerRef, NgZone } from '@angular/core';
import { BroadcastBooleanoService } from '../services/broadcast-booleano.service';
import { EnderecoModel } from '../endereco/models/endereco-model';


import * as $ from 'jquery';
import 'datatables.net'

import 'assets/maskplugin.js';
import { environment } from '../../environments/environment';

import { Book } from './models/book';
import { Ipage } from '../pagination/interface/ipage';

import { Calculator, test } from './models/Calculator'
import { ScriptLoaderServiceService } from '../services/script-loader-service.service';


import * as FileSaver from 'file-saver';


import * as jsPDF from 'jspdf'
import { TamanhoModalEnum } from '../modal-bootstrap/enum/tamanho-modal.enum';
import { ModalBootstrapComponent } from '../modal-bootstrap/modal-bootstrap.component';
import { AlertComponent } from '../alert/alert.component';
import { Joke } from '../Models/joke';





@Component({
  selector: 'project-B-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements
  AfterViewChecked,
  OnDestroy,
  AfterViewInit, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked {
    @ViewChildren(AlertComponent) alerts: QueryList<AlertComponent>
    @ViewChildren("div") divs: QueryList<any>
    @ViewChildren(AlertComponent, { read: ElementRef }) alertsElements: QueryList<ElementRef>;
    @ViewChildren(AlertComponent, { read: ViewContainerRef }) alertsDinamical: QueryList<ViewContainerRef>;
    joke: Joke = new Joke("A kid threw a lump of cheddar at me", "I thought ‘That’s not very mature’");
    joke2: Joke = new Joke("This a joke 2", "I thought ‘That’s not very mature’ new joke 2");
  public  tamanhoModal:TamanhoModalEnum = TamanhoModalEnum.Grande;

  //public mask:(RegExp| string)[] = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public mask:(RegExp| string)[] = [/[0-9]/ , /[0-9]/ , ',' , /[0-9]/ ];

  public regexp = new RegExp('^[1-9]\d{0,2}$')

  selected:Modelo = new Modelo();

  env:string = ``;

  @ViewChild('modalComponent') modalComponent:ModalBootstrapComponent;

  setarDrop(){
   
      // aqui é utilizado quando o angular não consiste a alteração da página ou o estado dos eventos 
      this.selected.id = 2;
   
  }

  selecionar(model:Modelo){

    console.log(model);
  }
  showmodal(){
    
    this.modalComponent.showModal();
  }

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

    console.log(` Onchanges ${console.dir(changes)} `)

  }
  Rodarjs() {

    let pad = new Padronizada();
    pad.Func();
  }

  promessa(): Promise<{}> {
    return new Promise((resolve, reject) => {
      window.setTimeout(resolve.bind(null, 10), 3000);
    })
  }


  cumprindoPromessa() {

    this.promessa().then(function (value) {
      console.log(value); // Will print 10 after 100ms.
    });
  }

  dowloadTable() {

    var columns = ["ID", "Name", "Country"];
    var rows = [
      [1, "Shaw", "Tanzania"],
      [2, "Nelson", "Kazakhstan"],
      [3, "Garcia", "Madagascar"],
    ];
    // Only pt supported (not mm or in)
    var doc: any = new jsPDF('p', 'pt');
    doc.autoTable(columns, rows);
    doc.save('table.pdf');
  }

  downloadPdf() {

    var doc = new jsPDF();
    doc.text(20, 20, 'Hello world!');
    doc.text(20, 30, 'This is client-side Javascript, pumping out a PDF.');
    doc.addPage();
    doc.text(20, 20, 'Do you like that?');

    // Save the PDF
    doc.save('Test.pdf');
  }

  importarjs() {

    this.serviceLoadScript.load({ name: `alertify`, src: `assets/alertify.js`, loaded: false, reason: '' });


    /*  console.log('preparing to load...')
            let node = document.createElement('script');
            node.src = `assets/Padronizada.js`;
            node.type = 'text/javascript';
            node.async = true;
            node.charset = 'utf-8';
            document.getElementsByTagName('head')[0].appendChild(node); */

  }

  cpfValor: string = '21371885893';
  mostrarDiv: boolean = false;
  paginationprop: Ipage = {

    currentPage: 1,
    totalRegisters: 500,
    qtdRegisterPage: 10,
    totalPages: 0,
    pages: []

  };

  saveFile() {

    let blob = new Blob([document.getElementById('exportDiv').innerHTML], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-16le"
    });
    FileSaver.saveAs(blob, "export.xls");
  }

  onReceberPager(pages: Ipage) {
    console.log(pages);
  }




  consultarNovamente() {

    this.paginationprop = {

      currentPage: 1,
      totalRegisters: 500,
      qtdRegisterPage: 10,
      totalPages: 0,
      pages: []

    };
    
  }

  public tableWidget: any;

  showalerts(){

    this.alerts.forEach(alertInstance => console.log(alertInstance));
    this.divs.forEach(div => console.log(div));
    this.alertsElements.forEach(el => console.log(el));
  }

  ngAfterViewInit() {

    
    this.selected.id = 100;
    console.log(` ngAfterViewInit `)
    this.initDatatable();

   

    let cf: any = $('#mascarado');
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
  listLivros: Array<Book> = [
    {
      titulo: 'Livro',

      estrelas: 10,
      paginas: 350,
      preco: 10.50,
      datalancamento: new Date(),
      urlLivro: 'Google '
    },
    {
      titulo: 'As sereias',

      estrelas: 10,
      paginas: 350,
      preco: 10.50,
      datalancamento: new Date(),
      urlLivro: 'Google '
    },
    {
      titulo: 'Os brazucas',

      estrelas: 10,
      paginas: 350,
      preco: 10.50,
      datalancamento: new Date(),
      urlLivro: 'Google '
    },
    {
      titulo: 'O malvino',

      estrelas: 10,
      paginas: 350,
      preco: 10.50,
      datalancamento: new Date(),
      urlLivro: 'Google '
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

  constructor(
    private zone: NgZone,
    private service: BroadcastBooleanoService,
    private serviceLoadScript: ScriptLoaderServiceService) {


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

  resultadoSomatoria(resultado) {
    console.log(` resultado somatoria ${resultado} `);
  }

  selectRow(i, row){

  }

  ngOnInit() {

    this.env = environment.mensagem;
    let der = new PrayTimes();
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
