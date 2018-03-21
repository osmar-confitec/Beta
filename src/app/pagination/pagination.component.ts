import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ipage } from './interface/ipage';


@Component({
  selector: 'project-B-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {


 @Input() pagination:Ipage;
 @Output() EmitterPage = new EventEmitter<Ipage>();

  constructor() { }

  emitirPage(){
    this.EmitterPage.emit(this.pagination);
  }

  ngOnInit() {


  }

}
