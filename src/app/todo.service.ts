import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable()
export class TodoService {

	constructor() { }
// old getTodos function
	// getTodos(){
	// 	return Observable.timer(1000)
	// 	.mapTo ([
	// 		{id:1,title : "Learn ngrx/store" , completed : false},
	// 		{id:2,title : "Learn ngrx/effects" , completed : true}
	// 		])
	// }

	addTodo( data ) {
		
		let title = data.payload;
		return Observable.timer(1000)
		.mapTo({id: Math.random(), title , completed: false})
	}

	removeTodo(id) {
		
	}	

	getTodos( filter ) {
		const todos = [{id: 1, title: "Learn ngrx/store", completed: true}, {
			id: 2,
			title: "Learn ngrx/effects",
			completed: false,
			}];
			return Observable.timer(2000)
			.mapTo(this.getVisibleTodos(todos, filter))
		}

		getVisibleTodos( todos, filter ) {
			if( filter === "SHOW_ALL" ) {
				return todos;
				} else if( filter === "SHOW_COMPLETED" ) {
					return todos.filter(t => t.completed);
					} else {
						return todos.filter(t => !t.completed);
					}
				}
			}
