import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Antônio Carlos';
  items = ['2','3','5','8','9'];

  ngOnInit(){ //inicia toda vez que o componente estiver pronto
    
   setTimeout(() => {
      this.title = 'Simões';
    }, 2000);  
    
  }

  novoItem(){
    const text = prompt('Digite um número: ');
    this.items.push(text);
  }

}
