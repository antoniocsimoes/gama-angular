import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo/todo.service';
import { map, debounceTime} from 'rxjs/operators';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  contador = 0;
  email = '';

  constructor(public todoService: TodoService, private authService: AuthService){}
  
  logout(){
    localStorage.removeItem('token');
    this.authService.setUser(null);
  }

  ngOnInit(){ //inicia toda vez que o componente estiver pronto
    const token = localStorage.getItem('token');

    if (token){
      this.authService.verifyToken(token).subscribe(
        (v:any) => {
          this.authService.setUser({
            email: v.users[0].email,
          });
        });
    }
    
    this.authService.currentUser.subscribe(v => {
      if(v !== null){
        this.email = v.email;
      }
    })
    this.todoService.contador
    .pipe(
      map(x => x * 2), 
      debounceTime(2000) //ele espera e depois executa tudo
    )
    .subscribe(valeu => {this.contador = valeu});   
  }

  
}
