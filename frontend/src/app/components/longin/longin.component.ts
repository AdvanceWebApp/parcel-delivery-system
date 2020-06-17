import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import {AuthService} from '../../services/auth.service' 
import {Router} from '@angular/router'

@Component({
  selector: 'app-longin',
  templateUrl: './longin.component.html',
  styleUrls: ['./longin.component.css']
})
export class LonginComponent implements OnInit {

  
  constructor(private auth: AuthService, private router: Router) { 
  }

  ngOnInit(): void {
  }

  autForm = new FormGroup({
    username : new FormControl(''),
    password : new FormControl(''),
  })

  signupForm = new FormGroup({
    username : new FormControl(''),
    password: new FormControl(''),
    firstName : new FormControl(''),
    lastName : new FormControl(''),
    email: new FormControl(''),
    roles:new FormControl('user'),
  })


  datas : any
  signin(){
    console.log(this.autForm.value)
    this.auth.signIn(this.autForm.value).subscribe(
      data=>{
        this.datas=data
        if(data.username){
          console.log(this.datas)
          console.log(this.datas.role)

        //  ROLE_ADMIN
         if(this.datas.role == 'ROLE_ADMIN'){
            console.log('admin')
            this.routerAdmin();
         }
        //  ROLE_REGISTERED_STAFF
        if(this.datas.role == 'ROLE_REGISTERED_STAFF'){
          console.log('Registered Staff')
           this.routerRegistered();
        }
        // ROLE_DELIVERY_STAFF
        if(this.datas.role == 'ROLE_DELIVERY_STAFF'){
          console.log('Delivery Staff')
          this.routerDelivery();
        }
        //ROLE_USER
        if(this.datas.role == 'ROLE_USER'){
          console.log('User')
          this.routerUser();
        }
         
        }else{
          alert('Username or Passwor is incorrect')
        }
      },
      err=>{
        console.log(err)
        alert('Error Username or Passwor is incorrect')
      });
  }

  signUp(){
    console.log(this.signupForm.value)    
    this.auth.signUp(this.signupForm.value).subscribe(
      data=>{
        alert('Successfully')
        this.signupForm.reset();
      },
      err=>{
        alert(err)
      }
    )
  }

  routerAdmin(){
    this.router.navigate(['/ManageEmployees'])
  }
  routerRegistered(){
    this.router.navigate(['/registparcel'])
  }
  routerDelivery(){
    this.router.navigate(['/showpackage'])
  }
  routerUser(){
    this.router.navigate(['/ManageEmployees'])
  }
 
}
