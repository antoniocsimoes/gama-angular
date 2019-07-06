import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
 import { library } from '@fortawesome/fontawesome-svg-core'; 
 import { fas } from '@fortawesome/free-solid-svg-icons'; 
import { Todo } from 'src/typings/Todo';
import { Router } from '@angular/router';
import {  } from '@angular/core';
 library.add(fas);

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
 @Input() data: Todo;
 @Output() deleteEvent = new EventEmitter();
 
  constructor(private router: Router) { }

  ngOnInit() {
  }

  editar(){
    this.router.navigateByUrl('/todos/' + this.data.id);
  }

  apagar() {
    this.deleteEvent.emit(this.data.id);
  }

}
