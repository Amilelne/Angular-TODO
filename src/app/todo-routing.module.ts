import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoHomeComponent} from './todo-home/todo-home.component';

const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path:'home',component: TodoHomeComponent},
  {path:'detail/:id',component: TodoDetailComponent},
  {path:'add',component: TodoAddComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ] ,
  exports: [
    RouterModule
  ]
})
export class TodoRoutingModule { }
