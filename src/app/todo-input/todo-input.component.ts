import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Component({
  selector: 'project-B-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {

  title: string;
  @Output() onTodo = new EventEmitter<Todo>();

  constructor() { }
  
  addTodo() {
    this.onTodo.emit({
      title: this.title,
      completed: false
    });
    this.title = '';
  }

  ngOnInit() {
  }

}
