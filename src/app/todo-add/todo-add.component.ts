import { TodoListService } from './../todo-list.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  date:Date = new Date();
  settings = {
    bigBanner:true,
    timePicker:false,
    format:'dd-MM-yyyy',
    defaultOpen:true
  }

  constructor(private todoListService: TodoListService) { }

  ngOnInit() {
  }

  add(name: string): void {
    name = name.trim();
    let todo = new Todo();
    todo.name = name;
    todo.createdAt = new Date;
    todo.dueAt = new Date;
    if( !name ) { return; }
    this.todoListService.addTodo(todo).subscribe(
      {
        error(err) {console.log(err)}
      }
    );
  }
}
