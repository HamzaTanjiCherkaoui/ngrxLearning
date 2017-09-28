import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule, ActionReducer, combineReducers } from '@ngrx/store';
import { EffectsModule } from "@ngrx/effects";
import { StoreRouterConnectingModule } from "@ngrx/router-store";
import { TodosComponent } from './todos/todos.component';
import { TodoComponent } from './todo/todo.component';

 
@NgModule({
  declarations: [
  AppComponent, 
  TodosComponent, TodoComponent,
  ],
  imports: [
  BrowserModule,
  ReactiveFormsModule,
  HttpModule,
  NoopAnimationsModule,
   StoreModule.forRoot({todos}),
  RouterModule.forRoot([
 
      { path: '', component: TodosComponent }
      ], {useHash: true})
  ],
  bootstrap: [AppComponent]
  })


export class AppModule { }


/// reducers 
export const GET_TODOS  = "GET_TODOS";
export const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
export const GET_TODOS_ERROR = "GET_TODOS_ERROR";

export function getTodos() { 
  return {
    type : GET_TODOS
  }
}
 const initialState = {
  data : [], 
   pending : false,
   error : null
}

export function todos (state = initialState , {type , payload}) {
  switch (type) {

    case GET_TODOS:
      return Object.assign({} ,state , {pending:true,error:null})

    case GET_TODOS_SUCCESS:
      return Object.assign({} ,state , {data:payload,error:false})

    case GET_TODOS_ERROR:
      return Object.assign({} ,state , {pending:true,error:"Error"})
    default:
    return state; 

  }
}