import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  parcel: any=[
    {"id":"1", "weight":"500", "unit":"กรัม", "customer_name":"Prayuth juneiei", "tel":"044112555"},
    {"id":"2", "weight":"1.5", "unit":"กิโลกรัม", "customer_name":"Prawit naja", "tel":"099251615"},
    {"id":"3", "weight":"200", "unit":"กรัม", "customer_name":"Mun Pang", "tel":"09561812"},
    {"id":"4", "weight":"847", "unit":"กรัม", "customer_name":"Kwan U", "tel":"01684168"},
    {"id":"5", "weight":"5", "unit":"กิโลกรัม", "customer_name":"Lao pi", "tel":"065415552"},
  ]

  item: number

  unit: string =''

  weight: string =''
  
  cname: string=''

  tel: string=''

  cost: number

  emp: string = 'Jairuk Borikan'

  addItem(){
    console.log(this.parcel[this.item-1])

    this.weight = this.parcel[this.item-1].weight
    this.unit = this.parcel[this.item-1].unit
    this.cname = this.parcel[this.item-1].customer_name
    this.tel = this.parcel[this.item-1].tel
    if(this.parcel[this.item-1].unit === 'กรัม'){
      this.cost = 30
    }else{
      this.cost = this.parcel[this.item-1].weight * 30
    }

    
  }

  /*selectedParcel: any[];*/

  /*onClickID(item){
    if(this.item != item){
      this.item = item
    console.log(this.item);
    }
  }*/

  

}
