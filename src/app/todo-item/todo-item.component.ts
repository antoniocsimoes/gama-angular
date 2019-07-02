import { Component, OnInit, Input } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
 import { library } from '@fortawesome/fontawesome-svg-core'; 
 import { fas } from '@fortawesome/free-solid-svg-icons'; 
 library.add(fas);

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
 @Input() data;
 
  constructor() { }

  ngOnInit() {
  }

}
