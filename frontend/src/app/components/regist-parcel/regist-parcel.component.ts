import { Component, OnInit } from '@angular/core';
import { RegistserviceService } from 'src/app/services/registservice.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

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

  idedit:any=[];
  idedits:any=[];
  name: String;
  phone: String;
  address: String;
  district: String;
  county: String;
  city: String;
  postCode: String;

  DeleteForm = new FormGroup({
    id : new FormControl('')
  })

REGForm = new FormGroup({
    state : new FormControl('ลงทะเบียนสำเร็จ'),
    nameS : new FormControl(''),
    phoneS: new FormControl(''),
    publicIdS : new FormControl(''),
    addressS : new FormControl(''),
    weigthS: new FormControl(),
    districtS:new FormControl(''),
    countyS : new FormControl(''),
    postCodeS : new FormControl(''),
    unitS: new FormControl(''),
    cityS:new FormControl(''),
    prefixS: new FormControl(''),
    nameR:new FormControl(''),
    phoneR : new FormControl(''),
    addressR : new FormControl(''),
    districtR: new FormControl(''),
    countyR:new FormControl(''),
    postCodeR: new FormControl(''),
    cityR:new FormControl(''),
    prefixR : new FormControl(''),
  })

  getArray(item){
    this.name = item.name;
    this.phone = item.phone;
    this.address = item.address;
    this.district = item.district;
    this.county = item.county;
    this.city = item.city;
    this.postCode = item.postCode;
  }

  clickEdit(idedit){
    if(this.idedit != idedit){
      this.idedit = idedit
    console.log(this.idedit);
    }

  }

  RegisterOK(){
    console.log(this.REGForm)
    console.log(this.REGForm.value)
    this.reg.RegSave(this.REGForm.value).subscribe(
      data=>{
        alert('Successfully')
        this.REGForm.reset();
      },
      err=>{
        alert(err)
      }
    )
  }

  RegDelete(idedit){
    if(this.idedit != idedit){
      this.idedit = idedit
    console.log(this.idedit);
    this.DeleteForm=idedit._id
    console.log(this.DeleteForm)
    this.reg.DeleteReg(this.DeleteForm).subscribe()
    }

  }

  EditReg(idedit){
    if(this.idedit != idedit){
      this.idedit = idedit
    console.log(this.idedit);
  }
  }
  // RegDelete(idedit){
  //   console.log(this.idedit)
  //   console.log(this.idedit.value)
  //   this.reg.DeleteReg(this.idedit.value).subscribe(
  //     data=> {
  //       alert('Successfully')
  //     },
  //     err=>{
  //       alert(err)
  //     }
  //   )
  // }



  ngOnInit(): void {
  }



}
