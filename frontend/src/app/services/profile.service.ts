import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  profile : any = []

  getProfiles(){
    return this.http.get<any>('http://localhost:8080/api/registered/getAllByStaff')
      .pipe(map(data => {
        if(data) {
          this.profile = data;
          console.log(this.profile);
        }
      return this.profile;
    }));
  }

}
