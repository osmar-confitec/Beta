import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'project-B-corpo-modal',
  templateUrl: './corpo-modal.component.html',
  styleUrls: ['./corpo-modal.component.css']
})
export class CorpoModalComponent implements OnInit {


  @Input() corpo:TemplateRef<any>;
  constructor() { }

  ngOnInit() {
    console.dir(this.corpo)
  }

}
