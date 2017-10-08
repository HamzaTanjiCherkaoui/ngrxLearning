import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterTodosComponent } from './filter-todos.component';

describe('FilterTodosComponent', () => {
  let component: FilterTodosComponent;
  let fixture: ComponentFixture<FilterTodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterTodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
