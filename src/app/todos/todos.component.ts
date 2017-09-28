import { Component, OnInit , ChangeDetectionStrategy , Input } from '@angular/core';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class TodosComponent implements OnInit {
	@Input() todos;
  constructor() { 
  	
  }

  ngOnInit() {
  }

}
