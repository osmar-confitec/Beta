import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { BroadcastBooleanoService } from '../services/broadcast-booleano.service';
import { EnderecoModel } from '../endereco/models/endereco-model';
import * as $ from 'jquery';
import 'datatables.net'
import { Book } from './models/book';

@Component({
  selector: 'project-B-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


public tableWidget: any;

  ngAfterViewInit() {
    this.initDatatable()
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

  constructor(private service: BroadcastBooleanoService) {


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

    this.livro.datalancamento = new Date(2016, 5, 23);


    this.livro.estrelas = 5.555;
    this.livro.titulo = ' O encantar das baleias  ';
    this.livro.paginas = 135;
    this.livro.preco = 1500.33;
    this.livro.urlLivro = 'https://www.google.com/';

  }

}
