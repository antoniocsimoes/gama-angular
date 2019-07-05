import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ContadorComponent } from './contador/contador.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'; 
import { fas } from '@fortawesome/free-solid-svg-icons';
import { ContadorBotoesComponent } from './contador-botoes/contador-botoes.component';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';


import { FormsModule } from '@angular/forms';



const routes: Routes = [
  { path: '', component: HomeComponent},  
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  { path: 'todos', loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule)},
  { path: 'cep', loadChildren: () => import('./cep/cep.module').then(m => m.CepModule)}
 
  
  
]

library.add(fas);

@NgModule({
  declarations: [
    AppComponent,    
    ContadorComponent,
    ContadorBotoesComponent,    
    HomeComponent
       
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
