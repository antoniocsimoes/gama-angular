import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { Todo } from 'src/typings/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private pContador = new BehaviorSubject(0); //Objeto onde podemos ver o valor dele
  
  contador = this.pContador.asObservable();

  //readonly URL = 'http://localhost:3000/todos';

  constructor(private httpClient: HttpClient) { }

  getTodos(): Observable<Todo[]>{
    return this.httpClient.get<Todo[]>('http://localhost:3000/todos');
  }


  adicionarTodo(todo:Todo){
    return this.httpClient.post('http://localhost:3000/todos', todo);
  }

  aumentar(){
    this.pContador.next(this.pContador.value + 1);
  }

  diminuir(){
    this.pContador.next(this.pContador.value - 1);
  }
}
