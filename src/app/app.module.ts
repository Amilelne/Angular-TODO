import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoListService } from './todo-list.service';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodoRoutingModule } from './/todo-routing.module';
import { TodoHomeComponent } from './todo-home/todo-home.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { TodoCardComponent } from './todo-card/todo-card.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoDetailComponent,
    TodoHomeComponent,
    TodoAddComponent,
    TodoCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TodoRoutingModule,
    AngularDateTimePickerModule
  ],
  providers: [TodoListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
