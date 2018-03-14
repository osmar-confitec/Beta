import { Component, OnInit } from '@angular/core';
import { BroadcastBooleanoService } from '../services/broadcast-booleano.service';

@Component({
  selector: 'project-B-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  boolvalue: boolean = false;

  constructor(private service: BroadcastBooleanoService) {


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

  ngOnInit() {



  }

}
