import { Component, OnInit ,Input , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
	@Input() todo;
	@Output() Toggle = new EventEmitter<any>(); 
	
  constructor() { 

  }

  ngOnInit() {
  }

}
