import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Todo } from './todo';

@Injectable()
export class TodoListService {

  private todoListsUrl = 'http://125.212.216.184:3000/api/Todos';
  

  constructor(
    private http: HttpClient
  ) { }

  getTodos (): Observable<Todo[]>{
    return this.http.get<Todo[]>(this.todoListsUrl)
      .pipe();
  }

  addTodo (todo: Todo): Observable<Todo>{
    return this.http.post<Todo>(this.todoListsUrl, todo).pipe();
  }

  getTodo (id: number): Observable<Todo> {
    const url = `${this.todoListsUrl}/${id}`;
    return this.http.get<Todo>(url).pipe();
  }

  deleteTodo (id: number) {
    const url = `${this.todoListsUrl}/${id}`;
    return this.http.delete(url);
  }

  patchTodo (id: number, name: string) {
    const url = `${this.todoListsUrl}/${id}`;
    return this.http.patch(url,name);
  }
  
}
