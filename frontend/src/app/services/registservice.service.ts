import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegistserviceService {

  regist: any;
  recive: any;
  sender: any;
  user: any;
  datas: any;
  constructor(private http : HttpClient) { }


  getRegist(){
    return this.http.get<any>('http://localhost:8080/registparcel')
      .pipe(map(data => {
        if(data) {
          this.regist = data;
          this.datas = this.regist[0]._id
          console.log(this.regist.length)
          console.log(this.regist);
          console.log(this.datas);
        }
      return this.regist;
    }));
  }

  getSender(){
    return this.http.get<any>('http://localhost:8080/sender/'+ this.datas)
      .pipe(map(data => {
        if(data) {
          this.sender = data;
          console.log(this.sender.length)
          console.log(this.sender);
        }
      return this.sender;
    }));
  }

  getRecive(){
    return this.http.get<any>('http://localhost:8080/recive')
      .pipe(map(data => {
        if(data) {
          this.recive = data;
          console.log(this.recive.length)
          console.log(this.recive);
        }

      return this.recive;
    }));
  }


  getUser(){
    return this.http.get<any>('http://localhost:8080/api/registered/getRegistered')
      .pipe(map(data => {
        if(data) {
          this.user = data;
          console.log(this.user);
        }
      return this.user;
    }));
  }

}
