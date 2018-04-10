import { TodoListService } from './../todo-list.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  constructor(private todoListService: TodoListService) { }

  ngOnInit() {
  }

  add(name: string): void {
    name = name.trim();
    if( !name ) { return; }
    this.todoListService.addTodo({ name } as Todo);
  }
}
