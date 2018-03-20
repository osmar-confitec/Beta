import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'project-B-btntest',
  templateUrl: './btntest.component.html',
  styleUrls: ['./btntest.component.css']
})
export class BtntestComponent implements OnInit {
  @Input() name:string;
  @Input() numeroSoma:number = 0;
  @Output() somar = new EventEmitter<number>();


  constructor() { }


  efetuarAcao(){
      let somatoria = this.numeroSoma * 5
      this.somar.emit(somatoria);
  }

  ngOnInit() {


  }

}
