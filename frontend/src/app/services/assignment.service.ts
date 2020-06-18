import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  regist: any;
  user: any;
  datas: any;
  staff: any;
  constructor(private http: HttpClient) { }


  getRegist() {
    return this.http.get<any>('http://localhost:8080/registparcel')
      .pipe(map(data => {
        if (data) {
          this.regist = data;
          this.datas = this.regist[0]._id
          console.log(this.regist.length)
          console.log(this.regist);
          console.log(this.datas);
        }
        return this.regist;
      }));
  }


  getUser() {
    return this.http.get<any>('http://localhost:8080/api/registered/getRegistered')
      .pipe(map(data => {
        if (data) {
          this.user = data;
          console.log(this.user);
          console.log(this.datas);
        }
        return this.user;
      }));
  }

  getStaff(){
    return this.http.get<any>('http://localhost:8080/api/registered/getAllByStaff')
      .pipe(map(data => {
        if (data) {
          this.staff = data;
          console.log(this.staff);
        }
        return this.staff;
      }));
  }

}
