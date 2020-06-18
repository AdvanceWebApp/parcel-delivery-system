import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';


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
    return this.http.put<any>('http://localhost:8080/registparcel/putRegistparcel',confirm)
    .pipe(map(data=>{
      return data;
    }));
  }


  deleteUser(id: string):Observable<any>{   
    console.log('deleteUser')
    const url = 'http://localhost:8080/api/admin/deleteUserById/'+id
    console.log(url)
    return this.http.delete(url)
    .pipe(map(data => {
      if(data) { 
        console.log(data);
      }
  }));
  }

  DeleteReg(reg){

    console.log(reg)
    return this.http.delete<any>('http://localhost:8080/registparcel/'+ reg)
  }


}
