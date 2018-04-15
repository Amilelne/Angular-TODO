import { TodoListService } from './../todo-list.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['../../scss/bootstrap.scss']
})
export class TodoDetailComponent implements OnInit {
  @Input() todo: Todo;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private todoService: TodoListService
  ) { }

  ngOnInit() {
    this.getTodo();
  }

  getTodo(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.todoService.getTodo(id)
      .subscribe(todo => this.todo = todo);
  }

  patchTodo(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.todoService.patchTodo(id,this.todo.name,this.todo.dueAt).subscribe(
      data => console.log(data),
      err => console.error(err)
    );
  }

}
