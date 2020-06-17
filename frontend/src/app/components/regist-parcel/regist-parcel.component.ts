import { Component, OnInit } from '@angular/core';
import { RegistserviceService } from 'src/app/services/registservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regist-parcel',
  templateUrl: './regist-parcel.component.html',
  styleUrls: ['./regist-parcel.component.css']
})
export class RegistParcelComponent implements OnInit {

  regist:any=[]
  recive:any=[]
  sender:any=[]
  user:any=[]

  constructor(private reg: RegistserviceService,private router: Router) {
    this.onLoadingRegist();
    this.onLoadingRecive();
    this.onLoadingSender();
    this.onLoadingUser();
    
   }
   onLoadingRegist(){
    try {
      this.reg.getRegist().subscribe(
        data => {
          this.regist = data;
        },
        err => {
          console.log(err)
        }
      );
    } catch (error) {
      console.log(error)
    }
  }
  onLoadingRecive()
  {
    try {
      this.reg.getRecive().subscribe(
        data => {
          this.recive = data;
        },
        err => {
          console.log(err)
        }
      );
    } catch (error) {
      console.log(error)
    }
  }

  onLoadingSender(){
    try {
      this.reg.getSender().subscribe(
        data => {
          this.sender = data;

        },
        err => {
          console.log(err)
        }
      );
    } catch (error) {
      console.log(error)
    }
  }

  onLoadingUser(){
    try {
      this.reg.getUser().subscribe(
        data => {
          this.user = data;
        },
        err => {
          console.log(err)
        }
      );
    } catch (error) {
      console.log(error)
    }
  }

  name: String;
  phone: String;
  address: String;
  district: String;
  county: String;
  city: String;
  postCode: String;

  getArray(item){
    this.name = item.name;
    this.phone = item.phone;
    this.address = item.address;
    this.district = item.district;
    this.county = item.county;
    this.city = item.city;
    this.postCode = item.postCode;
  }


  ngOnInit(): void {
  }

}
