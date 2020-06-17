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
  

  signIn(authData: any){
    return this.http.post<any>('http://localhost:8080/api/auth/signin',authData)
    .pipe(map(data=>{
      console.log("data"+" "+data)
      if(data){
        this.local.set('auth',data, 1, 'w');
        // console.log(this.local.get('token'));
        this.key = data.accessToken;
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