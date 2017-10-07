import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable()
export class TodoService {

	constructor() { }

	getTodos(){
		return Observable.timer(2000)
		.mapTo ([
			{id:1,title : "Learn ngrx/store" , completed : false},
			{id:2,title : "Learn ngrx/effects" , completed : false}
			])
	}

	addTodo( data ) {
		console.log(data.payload);
		let title = data.payload;
		return Observable.timer(2000)
		.mapTo({id: Math.random(), title , completed: false})
	}

}
