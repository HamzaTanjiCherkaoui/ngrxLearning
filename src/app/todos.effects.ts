import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { Observable } from "rxjs";
import { GET_TODOS , GET_TODOS_SUCCESS , GET_TODOS_ERROR , ADD_TODO,ADD_TODO_SUCCESS,ADD_TODO_ERROR} from "./store";
import { TodoService } from "./todo.service";

@Injectable()
export class TodosEffects {
  constructor(private action$ : Actions, private todoService : TodoService ) {
  }

  @Effect() getTodos$ = this.action$
  .ofType(GET_TODOS)
  .switchMap(payload =>
    this.todoService.getTodos()
    .map(todos => ( { type : GET_TODOS_SUCCESS , payload : todos}))
    .catch( () => Observable.of({type : GET_TODOS_ERROR})));

   @Effect() addTodo$ = this.action$
    .ofType(ADD_TODO)
    .switchMap(payload =>
      this.todoService.addTodo(payload)
        .map(todo => ({type: ADD_TODO_SUCCESS, payload: todo}))
        .catch(() => Observable.of({type: ADD_TODO_ERROR})));

}