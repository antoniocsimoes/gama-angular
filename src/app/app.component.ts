import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import { map, debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  contador = 0;

  constructor(public todoService: TodoService){}
  
  ngOnInit(){ //inicia toda vez que o componente estiver pronto
    this.todoService.contador
    .pipe(
      map(x => x * 2), 
      debounceTime(2000) //ele espera e depois executa tudo
    )
    .subscribe(valeu => {this.contador = valeu});   
  }

  
}
