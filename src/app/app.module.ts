import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { ContadorComponent } from './contador/contador.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'; 
import { fas } from '@fortawesome/free-solid-svg-icons';
import { ContadorBotoesComponent } from './contador-botoes/contador-botoes.component';
import { ListaTodosComponent } from './lista-todos/lista-todos.component'; 
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CepComponent } from './cep/cep.component';
import { CepTextoComponent } from './cep-texto/cep-texto.component';
import {FormsModule } from '@angular/forms';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { BoolPipe } from './bool.pipe';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'todos', component: ListaTodosComponent },
  { path: 'cep', component: CepTextoComponent},
  { path: 'cep/:numero', component: CepComponent},
  { path: 'todos/add', component: AddTodoComponent}
  
]

library.add(fas);

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    ContadorComponent,
    ContadorBotoesComponent,
    ListaTodosComponent,
    HomeComponent,
    CepComponent,
    CepTextoComponent,
    AddTodoComponent,
    BoolPipe
    
    
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
