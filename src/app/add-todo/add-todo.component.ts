import { Component, OnInit , ChangeDetectionStrategy , EventEmitter , Output , Input } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
	selector: 'add-todo',
	templateUrl: './add-todo.component.html',
	styleUrls: ['./add-todo.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
	})
export class AddTodoComponent implements OnInit {

	control : FormControl = new FormControl("");
	@Output() add = new EventEmitter();

	@Input()
	public set reset( action ) {
	
	 this.control.reset();
	
	}
	constructor() { }

	ngOnInit() {
	}

}
