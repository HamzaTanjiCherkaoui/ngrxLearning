import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { todos } from './store';
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
import { TodosEffects} from './todos.effects';
import {TodoService } from './todo.service';
import { AddTodoComponent } from './add-todo/add-todo.component';

@NgModule({
  declarations: [
  AppComponent, 
  TodosComponent, TodoComponent, AddTodoComponent,
  ],
  providers : [TodoService],
  imports: [
  BrowserModule,
  ReactiveFormsModule,
  HttpModule,
  NoopAnimationsModule,
  StoreModule.forRoot({todos}),
  EffectsModule.forRoot([TodosEffects]),
  RouterModule.forRoot([

    { path: '', component: AppComponent }
    ], {useHash: true})
  ],
  bootstrap: [AppComponent]
  })


export class AppModule { }


