import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'project-B-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

      let param1 = this.route.snapshot.queryParams["pagina"];
      console.dir(param1);
      this.route.data.subscribe(info=>{

        console.dir(info.usuario)

      });
  }



}
