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
    this.onLoadingRecieve();
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
          this.getRecieve();
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
    this.name = item.name;
    this.phone = item.phone;
    this.address = item.address; 
    this.district = item.district;
    this.county = item.county;
    this.city = item.city; 
    this.postCode = item.postCode;
  }

  // registFormConfirm = new FormGroup({
  //   state: new FormControl(''),
  //   recive: new FormControl(''),
  //   sender: new FormControl(''),
  //   user: new FormControl(''),
  //   created_at: new FormControl(''),
  //   updated_at: new FormControl(''),
  // })

  // clickConfirm(){
  //   console.log(this.registFormConfirm.value)    
  //   this.ps.putConfirm(this.registFormConfirm.value).subscribe(
  //     data=>{
  //       alert('จัดส่งสำเร็จ')
  //       this.registFormConfirm.reset();
  //     },
  //     err=>{
  //       alert(err)
  //     }
  //   )
  // }

  clickConfirm(){
    alert("จัดส่งสำเร็จ");
  }

  clickCancel(){
    alert("จัดส่งไม่สำเร็จ");
  }


}
