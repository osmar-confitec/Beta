import { Component, OnInit } from '@angular/core';
import { BroadcastBooleanoService } from '../services/broadcast-booleano.service';

@Component({
  selector: 'project-B-inputsgenerates',
  templateUrl: './inputsgenerates.component.html',
  styleUrls: ['./inputsgenerates.component.css']
})
export class InputsgeneratesComponent implements OnInit {

  constructor(private service: BroadcastBooleanoService) { }

  ngOnInit() {

    this.service.emiter.subscribe((ins:boolean)=> { 
           console.log(ins+ 'input generate 1');
     });
  }

}
