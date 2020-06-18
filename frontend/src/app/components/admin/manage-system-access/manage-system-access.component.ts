import { Component, OnInit } from '@angular/core';
import {ApiUserService} from '../../../services/api-user.service'
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-manage-system-access',
  templateUrl: './manage-system-access.component.html',
  styleUrls: ['./manage-system-access.component.css']
})
export class ManageSystemAccessComponent implements OnInit {

  formPut = new FormGroup({
    username : new FormControl(''),
    password: new FormControl(''),
    firstName : new FormControl(''),
    lastName : new FormControl(''),
    email: new FormControl(''),
    roles:new FormControl(''),
  })
  
  item: any=[]

  positions: any =['','พนักงานลงทะเบียนพัสดุ','พนักงานส่งพัสดุ']
  position: String=''
  constructor(private api : ApiUserService) { 
    this.getUser();
    this.getrole();
  }

  ngOnInit(): void {
  }

  User: any
  getUser(){
    try {
      this.api.getUser().subscribe(
        data => {
          console.log('getStaffs')
          this.User = data;
          console.log(this.User)
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

    console.log();
    }
  }
  add(){
    console.log('add')
    if(this.position!=''){
      console.log(this.item.id)
      console.log(this.item.ID_Employees)
      console.log(this.item.firstName)
      console.log(this.item.lastName)
      console.log(this.item.email)
      console.log(this.position)
      this.deletes(this.item.id)
    }
    
  }
  deletes(id){
    console.log('delete')
    console.log(id)
    
    this.api.deleteUser(id)
    
  }
}