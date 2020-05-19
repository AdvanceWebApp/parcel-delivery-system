import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-system-access',
  templateUrl: './manage-system-access.component.html',
  styleUrls: ['./manage-system-access.component.css']
})
export class ManageSystemAccessComponent implements OnInit {

  items: any = [
    {id: 1, ID_Employees: 'B5917440',firstName: 'Nopparat', lastName: 'Waoram', email: 'arm.noparat@gmail.com'},
    {id: 2, ID_Employees: 'B0447195',firstName: 'arm', lastName: 'noparat', email: 'noparat@gmail.com'}
  ]
  item: any=[]

  positions: any =['','พนักงานลงทะเบียนพัสดุ','พนักงานส่งพัสดุ']
  position: String=''
  constructor() { 
    this.get();
  }

  ngOnInit(): void {
  }

  get(){
    console.log('get')
  }
  itemAdd(item){
    if(this.item != item){
      this.item = item
    console.log(this.item);
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
    this.position=''
  }
}
