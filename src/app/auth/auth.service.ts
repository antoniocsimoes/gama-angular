import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private pUser = new BehaviorSubject(null);
  currentUser = this.pUser.asObservable();

  constructor(private httpClient: HttpClient) { }

  login(email, password){
    return this.httpClient.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyCLWJv9rVQluN1rN09HPuxTVNmdiNl0MIM', {
      email,
      password,
  });
}

  creatAccount(email, password){
    console.log(email +' '+ password);
    return this.httpClient.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyCLWJv9rVQluN1rN09HPuxTVNmdiNl0MIM', {
      email,
      password, 
    });
  }

  verifyToken(token){
    return this.httpClient.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/getAccountInfo?key=AIzaSyCLWJv9rVQluN1rN09HPuxTVNmdiNl0MIM', {
      idToken: token
    });
  }

  setUser(user){
    this.pUser.next(user);
  }

  logout(){

  }
}
