import { Injectable } from '@angular/core';
import{map} from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiUserService {

constructor(private http : HttpClient) { }

public Staff :any
public User :any
public role :any

  getStaff(){
    return this.http.get<any>('http://localhost:8080/api/admin/getStaffAllByAdmin')
      .pipe(map(data => {
        if(data) {
          this.Staff = data;
          console.log(this.Staff);
        }
      return this.Staff;
    }));
  }

  getUser(){
    return this.http.get<any>('http://localhost:8080/api/admin/getUserAllByAdmin')
      .pipe(map(data => {
        if(data) {
          this.User = data;
          console.log(this.User);
        }
      return this.User;
    }));
  }

  getRole(){
    return this.http.get<any>('http://localhost:8080/api/role')
      .pipe(map(data => {
        if(data) {
          this.role = data;
          console.log(this.role);
        }
      return this.role;
    }));
  }

  de(){
    
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
  
  

}
