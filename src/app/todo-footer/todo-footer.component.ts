import { Component, OnInit } from '@angular/core';
import { TodoList } from '../services/todo-list';

@Component({
  selector: 'project-B-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  constructor(private todos: TodoList) {}

  ngOnInit() {
  }

}
