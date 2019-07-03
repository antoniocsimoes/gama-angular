import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTodosComponent } from './lista-todos.component';

describe('ListaTodosComponent', () => {
  let component: ListaTodosComponent;
  let fixture: ComponentFixture<ListaTodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaTodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
