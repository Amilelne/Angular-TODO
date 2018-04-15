import { Component, OnInit, Input } from '@angular/core';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['../../scss/bootstrap.scss']
})
export class TodoCardComponent implements OnInit {
  @Input('todo') todo;

  constructor(private todoListService:TodoListService) { }

  ngOnInit() {
  }

  delete(id: number): void {
    this.todoListService.deleteTodo(id).subscribe(
      data => console.log(data),
      error => console.error(error)
    );
  }

}
