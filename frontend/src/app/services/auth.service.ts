import { Injectable } from '@angular/core';
import{ HttpClient, HttpClientModule} from '@angular/common/http'
import{map} from 'rxjs/operators'
import {LocalStorageService}from'angular-web-storage';
// import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient, public local: LocalStorageService ) { }
  
  public key :string
  public user: any[]
  

  signIn(authData: any){
    return this.http.post<any>('http://localhost:8080/api/auth/signin',authData)
    .pipe(map(data=>{
      if(data){
        this.local.set('auth',data, 1, 'w');
        this.key = data.accessToken;
        this.user = data;
      }
      return data;
    }))
  }

  signUp(signup){
    return this.http.post<any>('http://localhost:8080/api/auth/signUp',signup)
    .pipe(map(data=>{
      return data;
    }));
  }

  signOut(){
    this.local.remove('auth');
  }

}
