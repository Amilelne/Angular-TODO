import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-todo-home',
  templateUrl: './todo-home.component.html',
  styleUrls: ['./todo-home.component.css']
})
export class TodoHomeComponent implements OnInit {

  todos: Todo[];

  constructor(private todoListService: TodoListService) {}

  ngOnInit() {
    this.getTodos();
  }

  getTodos(): void {
    this.todoListService.getTodos().subscribe(todos => this.todos = todos);
  }

  delete(id: number): void {
    this.todoListService.deleteTodo(id);
  }

}
