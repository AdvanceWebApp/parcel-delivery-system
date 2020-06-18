import { Component, OnInit } from '@angular/core';
import { PaymentService } from 'src/app/services/payment.service';
import { FormGroup,FormControl } from '@angular/forms';
import {Router} from '@angular/router'
//import { AuthService } from 'src/app/services/auth.service'

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {


  ngOnInit(): void {
  }

  get(){
    console.log('get')
  }


  regists: any = []
  users: any = []


  constructor(private ps:PaymentService, private router: Router/*, private at:AuthService*/) {
  
    this.onLoadingRegist();
  }

  onLoadingRegist(){
    try {
      this.ps.getRegist().subscribe(
        data => {
          this.regists = data;
          this.item = this.regists;
        },
        err => {
          console.log(err)
        }
      );
    } catch (error) {
      console.log(error)
    }
  }



  getRegist(){
    console.log(this.regists[0].sender)
  }

  /*parcel: any=[
    {"id":"1", "weight":"500", "unit":"กรัม", "customer_name":"Prayuth juneiei", "tel":"044112555"},
    {"id":"2", "weight":"1.5", "unit":"กิโลกรัม", "customer_name":"Prawit naja", "tel":"099251615"},
    {"id":"3", "weight":"200", "unit":"กรัม", "customer_name":"Mun Pang", "tel":"09561812"},
    {"id":"4", "weight":"847", "unit":"กรัม", "customer_name":"Kwan U", "tel":"01684168"},
    {"id":"5", "weight":"5", "unit":"กิโลกรัม", "customer_name":"Lao pi", "tel":"065415552"},
  ]*/

  item: string

  unit: string =''

  weight: number
  
  cname: string=''

  tel: string=''

  cost: number

  name: string ="Somsree Meemak"
 /* emp: string = 'Jairuk Borikan'*/
  
  s:any
  addItem(){
    console.log(this.item)
    for(var i=0;i< this.regists.length; i++){
      if(this.item==this.regists[i]._id){
        this.s = this.regists[i]

      }
    }
    console.log(this.s)
     this.weight = this.s.weigthS
     this.unit = this.s.unitS
     this.cname = this.s.nameS
     this.tel = this.s.phoneS
     if(this.s.unitS === 'กรัม'){
       this.cost = 30
     }else{
       this.cost = this.s.weigthS * 30
     }
  }


  /*selectedParcel: any[];*/

  /*onClickID(item){
    if(this.item != item){
      this.item = item
    console.log(this.item);
    }
  }*/
  submitClick() {
    alert("บันทึกช้อมูลสำเร็จ")
    this.clear();
  }

  clear() {
    this.weight = null
    this.unit = ''
    this.tel = ''
    this.cname = ''
    this.cost = null
  }

  clearClick() {
    this.clear();
    
  }
  

}
