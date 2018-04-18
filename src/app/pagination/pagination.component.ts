import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ipage } from './interface/ipage';
import { PaginationServiceService } from './services/pagination-service.service';


@Component({
  selector: 'project-B-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
  providers:[PaginationServiceService]
})
export class PaginationComponent implements OnInit {


  @Input() pagination: Ipage;
  @Output() EmitterPage = new EventEmitter<Ipage>();
  showDetailsPages:boolean = false;
  previosPage:boolean = false;
  currentPage:number = 0;
  totalPagesPage:number = 0;

  constructor() { }

  emitirPage() {
    this.EmitterPage.emit(this.pagination);
  }

  public tratarPaginacao() {
    this.pagination.pages = [];
    this.pagination.totalPages = Math.ceil(this.pagination.totalRegisters / this.pagination.qtdRegisterPage);
    let startPage: number, endPage: number;
    //se for menor ou igual a 10 show all 
    if (this.pagination.totalPages <= 10) {
      startPage = 1;
      endPage = this.pagination.totalPages;
    }
    else {
      // more than 10 total pages so calculate start and end pages
      if (this.pagination.currentPage <= 6) {
        startPage = 1;
        endPage = 10;
      } else if (this.pagination.currentPage + 4 >= this.pagination.totalPages) {
        startPage = this.pagination.totalPages - 9;
        endPage = this.pagination.totalPages;
      } else {
        startPage = this.pagination.currentPage - 5;
        endPage = this.pagination.currentPage + 4;
      }
    }

    // calculate start and end item indexes
    let startIndex = (this.pagination.currentPage - 1) * this.pagination.qtdRegisterPage;
    let endIndex = Math.min(startIndex + this.pagination.qtdRegisterPage - 1, this.pagination.totalRegisters - 1);

    for (let i = startPage; i < (endPage + 1); i++) {
      this.pagination.pages.push({
        description: i.toString(),
        numberPage: i,
        currentPage: i == this.pagination.currentPage ? true : false
      });
    }

    this.showDetailsPages   = this.pagination.pages.length > 0;
    this.currentPage        =  this.pagination.currentPage;   
    this.totalPagesPage =   this.pagination.totalPages;
  }

  ngOnInit() {
    this.tratarPaginacao();

  }


  setPage(page: number) {
    this.pagination.currentPage = page;
    this.tratarPaginacao();
    this.emitirPage();
   }

}
