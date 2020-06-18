import { Component, OnInit } from '@angular/core';
import { PackageService } from 'src/app/services/package.service';
import { FormGroup,FormControl } from '@angular/forms';
import {Router} from '@angular/router'

@Component({
  selector: 'app-showpackage',
  templateUrl: './showpackage.component.html',
  styleUrls: ['./showpackage.component.css']
})
export class ShowpackageComponent implements OnInit {

  // packages: any = [
  //   {id: 1000000001, name: 'Thiwat H.', phone: '0912345678', address: '258 main st.', 
  //   district: 'district', county: 'li state', city: 'Bangkok', postCode: '10900'},
  //   {id: 1000000002, name: 'Salita P.', phone: '0987654321', address: '205/32 sub st.', 
  //   district: 'none', county: 'jul state', city: 'Chiang-Mai', postCode: '50000'},
  // ]


  assigns : any = []
  regists : any = []
  recives : any = []
  state : String;
  

  
  constructor(private ps:PackageService, private router: Router) {
    this.onLoadingAssign();
    this.onLoadingRegist();
    // this.onLoadingRecieve();
    // this.get();
  }

  ngOnInit(): void {
  }

  get(){
    console.log('get')
  }

  onLoadingAssign(){
    try {
      this.ps.getAssigns().subscribe(
        data => {
          this.assigns = data;
          this.getRegistparcel();
        },
        err => {
          console.log(err)
        }
      );
    } catch (error) {
      console.log(error)
    }
  }

  onLoadingRegist(){
    try {
      this.ps.getRegists().subscribe(
        data => {
          this.regists = data;
          // this.getRecieve();
        },
        err => {
          console.log(err)
        }
      );
    } catch (error) {
      console.log(error)
    }
  }

  onLoadingRecieve(){
    try {
      this.ps.getRecieves().subscribe(
        data => {
          this.recives = data;
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
  

  getRegistparcel(){
    console.log(this.assigns[0].registparcel)
  }

  getRecieve(){
    console.log(this.regists[0].recive)
  }

  getArray(item){
    
    this.name = item.nameR;
    this.phone = item.phoneR;
    this.address = item.addressR; 
    this.district = item.districtR;
    this.county = item.countyR;
    this.city = item.cityR; 
    this.postCode = item.postCodeR;
  }

  registFormConfirm = new FormGroup({
    state:new FormControl('จัดส่งสำเร็จ'),
    nameS:new FormControl(''),
    phoneS:new FormControl(''),
    publicIdS:new FormControl(''),
    addressS:new FormControl(''),
    weigthS:new FormControl(''),
    districtS:new FormControl(''),
    countyS:new FormControl(''),
    postCodeS:new FormControl(''),
    unitS:new FormControl(''),
    cityS:new FormControl(''),
    prefixS:new FormControl(''),
    nameR:new FormControl(''),
    phoneR:new FormControl(''),
    addressR:new FormControl(''),
    districtR:new FormControl(''),
    countyR:new FormControl(''),
    postCodeR:new FormControl(''),
    cityR:new FormControl(''),
    prefixR:new FormControl(''),
  })
  

  clickConfirm(){
    
    console.log(this.registFormConfirm.value)    
    this.ps.putConfirm(this.registFormConfirm.value).subscribe(
      data=>{
        alert('จัดส่งสำเร็จ')
        this.registFormConfirm.reset();
      },
      err=>{
        alert(console.log)
      }
    )
  }

  // clickConfirm(){
  //   alert("จัดส่งสำเร็จ");
  // }

  clickCancel(id){
    this.ps.DeleteReg(id).subscribe()
    window.location.reload();
  }


}
