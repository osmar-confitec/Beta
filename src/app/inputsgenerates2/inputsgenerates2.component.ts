import { Component, OnInit } from '@angular/core';
import { BroadcastBooleanoService } from '../services/broadcast-booleano.service';

@Component({
  selector: 'project-B-inputsgenerates2',
  templateUrl: './inputsgenerates2.component.html',
  styleUrls: ['./inputsgenerates2.component.css']
})
export class Inputsgenerates2Component implements OnInit {

  constructor(private service: BroadcastBooleanoService) { }

  ngOnInit() {

    this.service.emiter.subscribe((ins: boolean) => {
      console.log(ins + 'input generate 2');
    });
  }

}
