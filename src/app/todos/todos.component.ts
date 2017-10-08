import { Component, OnInit , ChangeDetectionStrategy , Input , Output  , EventEmitter} from '@angular/core';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class TodosComponent implements OnInit {
	
  @Input() todos;
  @Output() changeTodoState = new EventEmitter<any>();

  constructor() { 
  }

  ngOnInit() { }

  ToggleTodo(newState,id) {  
    this.changeTodoState.next({ newState , id });
  }
}
