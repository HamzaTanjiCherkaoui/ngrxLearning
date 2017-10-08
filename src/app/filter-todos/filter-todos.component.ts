import { Component, OnInit , Input , Output , EventEmitter} from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
	selector: 'filter-todos',
	templateUrl: './filter-todos.component.html',
	styleUrls: ['./filter-todos.component.css']
	})
export class FilterTodosComponent implements OnInit {
	@Input() filters;
	@Output() changeFilter = new EventEmitter<any>();
	filter : FormControl;
	
		constructor() { 
			this.filter = new FormControl();
		}

		ngOnInit() {
		}

		@Input() set active( val ) {
			this.filter.setValue(val);
		}
	}
