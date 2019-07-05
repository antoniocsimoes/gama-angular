import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from 'src/typings/Todo';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-todos',
  templateUrl: './lista-todos.component.html',
  styleUrls: ['./lista-todos.component.css']
})
export class ListaTodosComponent implements OnInit {
  //todos: Todo[] = [];
  todos$: Observable<Todo[]>; //toda Observable termina com $

  constructor(private todoService: TodoService) { }

  ngOnInit() {
   /* this.todoService.getTodos().subscribe(value => {
       console.log(value);
       this.todos = value;
      });    */
      this.todos$ = this.todoService.getTodos();
  }

}
