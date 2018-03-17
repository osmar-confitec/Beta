import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'datatables.net'

@Component({
  selector: 'project-B-datatable-net',
  templateUrl: './datatable-net.component.html',
  styleUrls: ['./datatable-net.component.css']
})
export class DatatableNetComponent implements OnInit {

  

  public data =
  [{
    "name": "Anna",
    "lastName": "Konda"
  },
  {
    "name": "Wayne",
    "lastName": "Interessierts"
  }];

public tableWidget: any;

public selectedName: string=""


constructor() { }

ngOnInit() {
}

ngAfterViewInit() {
  this.initDatatable()
}

private initDatatable(): void {
  debugger
  let exampleId: any = $('#example');
  this.tableWidget = exampleId.DataTable({
    select: true
  });
//   $('#example')
//     .removeClass('display')
//     .addClass('table table-striped table-bordered')
}

private reInitDatatable(): void {
  if (this.tableWidget) {
    this.tableWidget.destroy()
    this.tableWidget=null
  }
  setTimeout(() => this.initDatatable(),0)
}

public deleteRow(): void {
  this.data.pop();
  this.reInitDatatable()
}

public addRow(): void {
  if (this.data.length%5==0) {
    this.data.push({"name": "Anna", "lastName": "Konda"})
  } else if (this.data.length%5==1) {
    this.data.push({"name": "Wayne", "lastName": "Interessierts"})
  } else if (this.data.length%5==2) {
    this.data.push({"name": "Andy", "lastName": "Biotika"})
  } else if (this.data.length%5==3) {
    this.data.push({"name": "Niko", "lastName": "Tin"})
  } else {
    this.data.push({"name": "Mo", "lastName": "Zarella"})
  }
  this.reInitDatatable()
}

public selectRow(index: number, row:any) {
  this.selectedName = "row#" + index + " " + row.name
}


}
