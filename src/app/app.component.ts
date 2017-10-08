import { Component } from '@angular/core';
import {getTodos , ADD_TODO_SUCCESS , addTodo , setVisibilityFilter , toggleTodo } from "./store";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import {  TodosEffects } from './todos.effects';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  })
export class AppComponent {

  todos  :Observable<any>;
  addTodoSuccess$ : Observable<any>;
  filters = [{id: "SHOW_ALL", title: "All"}, {id: "SHOW_COMPLETED", title: "Completed"}, {
    id: "SHOW_ACTIVE",
    title: "Active"
    }];

   activeFilter : Observable<any>;

  constructor ( private store : Store<any> , private todosEffects : TodosEffects) {

  	this.store.dispatch(getTodos());
  	this.todos = store.select("todos");
    this.addTodoSuccess$ = this.todosEffects.addTodo$.filter(( { type } ) => type === ADD_TODO_SUCCESS);
    this.activeFilter = store.select("visibilityFilter").take(1);

  }

  addTodo (todo) {
   this.store.dispatch(addTodo(todo));
 }

 changeFilter( filter ) {
    this.store.dispatch(setVisibilityFilter(filter));
    this.store.dispatch(getTodos());
  }

  changeTodoState(todoToChange) {

   this.store.dispatch(toggleTodo(todoToChange));
    
  }

}
