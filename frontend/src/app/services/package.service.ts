import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PackageService {

  assign: any;
  regist: any;
  recieve: any;

  constructor(private http : HttpClient) { }

  getAssigns(){
    return this.http.get<any>('http://localhost:8080/assingment')
      .pipe(map(data => {
        if(data) {
          this.assign = data;
          console.log(this.assign);
        }
      return this.assign;
    }));
  }

  getRegists(){
    return this.http.get<any>('http://localhost:8080/registparcel')
      .pipe(map(data => {
        if(data) {
          this.regist = data;
          console.log(this.regist);
        }
      return this.regist;
    }));
  }

  getRecieves(){
    return this.http.get<any>('http://localhost:8080/recive')
      .pipe(map(data => {
        if(data) {
          this.recieve = data;
          console.log(this.recieve);
        }
      return this.recieve;
    }));
  }

  putConfirm(confirm){
    return this.http.post<any>('http://localhost:8080/registparcel/putRegistparcel',confirm)
    .pipe(map(data=>{
      return data;
    }));
  }


}
