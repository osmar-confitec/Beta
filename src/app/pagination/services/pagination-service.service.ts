import { Injectable } from '@angular/core';
import { Ipage } from '../interface/ipage';

@Injectable()
export class PaginationServiceService {

  constructor() { }


  tratarPaginacao(pagination:Ipage) {
    pagination.pages = [];
    pagination.totalPages = Math.ceil(pagination.totalRegisters / pagination.qtdRegisterPage);
    let startPage: number, endPage: number;
    //se for menor ou igual a 10 show all 
    if (pagination.totalPages <= 10) {
      startPage = 1;
      endPage = pagination.totalPages;
    }
    else {
      // more than 10 total pages so calculate start and end pages
      if (pagination.currentPage <= 6) {
        startPage = 1;
        endPage = 10;
      } else if (pagination.currentPage + 4 >= pagination.totalPages) {
        startPage = pagination.totalPages - 9;
        endPage = pagination.totalPages;
      } else {
        startPage = pagination.currentPage - 5;
        endPage = pagination.currentPage + 4;
      }
    }

    // calculate start and end item indexes
    let startIndex = (pagination.currentPage - 1) * pagination.qtdRegisterPage;
    let endIndex = Math.min(startIndex + pagination.qtdRegisterPage - 1, pagination.totalRegisters - 1);

    for (let i = startPage; i < (endPage + 1); i++) {
      pagination.pages.push({
        description: i.toString(),
        numberPage: i,
        currentPage: i == pagination.currentPage ? true : false
      });
    }
  }
}
