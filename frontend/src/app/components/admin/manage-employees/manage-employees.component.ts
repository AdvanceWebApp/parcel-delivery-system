import { Component, OnInit } from '@angular/core';
import {ApiUserService} from '../../../services/api-user.service'
@Component({
  selector: 'app-manage-employees',
  templateUrl: './manage-employees.component.html',
  styleUrls: ['./manage-employees.component.css']
})
export class ManageEmployeesComponent implements OnInit {

  
  item: any=[]
  constructor(private api : ApiUserService) {this.getStaffs(),this.getrole()}

  ngOnInit(): void {
  }

  Staff: any
  getStaffs(){
    try {
      this.api.getStaff().subscribe(
        data => {
          console.log('getStaffs')
          this.Staff = data;
          console.log(this.Staff)
        },
        err => {
          console.log(err)
        }
      );
    } catch (error) {
      console.log(error)
    }
  }

  role: any
  getrole(){
    try {
      this.api.getRole().subscribe(
        data => {
          console.log('getRole')
          this.role = data;
          console.log(this.role)
        },
        err => {
          console.log(err)
        }
      );
    } catch (error) {
      console.log(error)
    }
  }

  itemAdd(item){
    if(this.item != item){
      this.item = item
    console.log(this.item);
    }
  }

  name(id){
    for(var i=0;i<this.role.length;i++){
      if(id==this.role[i]._id){
        return this.role[i].name
      }
    }
  }

  put(){
    console.log('add')
    console.log(this.item.id)
    console.log(this.item.ID_Employees)
    console.log(this.item.firstName)
    console.log(this.item.lastName)
    console.log(this.item.email)  
    this.deletes(this.item.id)
  }

  deletes(id){
    console.log('delete')
    console.log(id)
  }
}
