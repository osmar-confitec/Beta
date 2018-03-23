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

  constructor(private pagservice:PaginationServiceService) { }

  emitirPage() {
    this.EmitterPage.emit(this.pagination);
  }


  ngOnInit() {
  this.pagservice.tratarPaginacao(this.pagination);

  }


  setPage(page: number) {
    this.pagination.currentPage = page;
    this.pagservice.tratarPaginacao(this.pagination);
    this.emitirPage();
   }

}
