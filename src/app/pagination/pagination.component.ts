import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ipage } from './interface/ipage';


@Component({
  selector: 'project-B-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {


  @Input() pagination: Ipage;
  @Output() EmitterPage = new EventEmitter<Ipage>();

  constructor() { }

  emitirPage() {
    this.EmitterPage.emit(this.pagination);
  }

  tratarPaginacao() {
    let qtdRegisterPage = 10;
    this.pagination.pages = [];
    this.pagination.totalPages = Math.ceil(this.pagination.totalRegisters / qtdRegisterPage);
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
    let startIndex = (this.pagination.currentPage - 1) * qtdRegisterPage;
    let endIndex = Math.min(startIndex + qtdRegisterPage - 1, this.pagination.totalRegisters - 1);

    for (let i = startPage; i < (endPage + 1); i++) {
      this.pagination.pages.push({
        description: i.toString(),
        numberPage: i,
        currentPage: i == this.pagination.currentPage ? true : false
      });
    }
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
