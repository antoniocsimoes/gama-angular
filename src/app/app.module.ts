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

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'todos', component: ListaTodosComponent },
  { path: 'cep/:numero', component: CepComponent}
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
    CepComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
