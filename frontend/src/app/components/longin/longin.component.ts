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

  signin(){
    console.log(this.autForm.value)
    this.auth.signIn(this.autForm.value).subscribe(
      data=>{
        if(data.username){
          
          this.router.navigate(['/ManageEmployees'])
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
 
}
