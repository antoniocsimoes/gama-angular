import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { ContadorComponent } from './contador/contador.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
 import { library } from '@fortawesome/fontawesome-svg-core'; 
 import { fas } from '@fortawesome/free-solid-svg-icons'; 
 library.add(fas);

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    ContadorComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
