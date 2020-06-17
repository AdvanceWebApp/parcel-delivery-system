import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  get(){
    console.log('get')
  }

  /*regis: any = [
    { "sender_id": , "reciever_id": 1 },
    { "sender_id": 1, "reciever_id": 1 },
    { "sender_id": 1, "reciever_id": 1 },
  ]*/

  parcel: any = [
    { "id": "1", "weight": "500", "unit": "กรัม", "customer_name": "Prayuth juneiei", "tel": "044112555" },
    { "id": "2", "weight": "1.5", "unit": "กิโลกรัม", "customer_name": "Prawit naja", "tel": "099251615" },
    { "id": "3", "weight": "200", "unit": "กรัม", "customer_name": "Mun Pang", "tel": "09561812" },
    { "id": "4", "weight": "847", "unit": "กรัม", "customer_name": "Kwan U", "tel": "01684168" },
    { "id": "5", "weight": "5", "unit": "กิโลกรัม", "customer_name": "Lao pi", "tel": "065415552" },
  ]

  recives: any = [
    { "prefix": "นางสาว", "name": "สุชาดา รูปสม", "phone": "0123456789", "address": "320", "district": "บางนา", "county": "บางนา", "city": "กรุงเทพ", "postCode": "10000" },
    { "prefix": "นาย", "name": "พัสสน อิอิ", "phone": "096548245", "address": "98", "district": "หนองไผ่", "county": "ภูเขียว", "city": "ขอนแก่น", "postCode": "36548" },
    { "prefix": "เด็กชาย", "name": "ประหยัด อดออม", "phone": "0612165256", "address": "59/4", "district": "หลวง", "county": "นาเกลือ", "city": "โคราช", "postCode": "30000" },
    { "prefix": "เด็กหญิง", "name": "โอ เลี้ยง", "phone": "044112555", "address": "112", "district": "หลวง", "county": "นาข้าว", "city": "เยอะมัน", "postCode": "112112" },
  ]

  item: number

  unit: string = ''

  weight: string =''

/*------------*/

  pre: string = ''

  rname: string = ''

  tel: string = ''

  adr: string=''

  dist: string=''

  cnty: string = ''

  city: string = ''

  pcode: string = ''

  emp: string = 'Jairuk Borikan'


  addItem() {
    console.log(this.parcel[this.item - 1])

    this.weight = this.parcel[this.item - 1].weight
    this.unit = this.parcel[this.item - 1].unit

     this.pre = this.recives[this.item - 1].prefix
     this.rname = this.recives[this.item - 1].name
     this.tel = this.recives[this.item - 1].phone
     this.adr = this.recives[this.item - 1].address
     this.dist = this.recives[this.item - 1].district
     this.cnty = this.recives[this.item - 1].county
     this.city = this.recives[this.item - 1].city
     this.pcode = this.recives[this.item - 1].postCode
  }



}
