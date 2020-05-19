import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-employees',
  templateUrl: './manage-employees.component.html',
  styleUrls: ['./manage-employees.component.css']
})
export class ManageEmployeesComponent implements OnInit {

 
  items: any = [
    {id: '1', ID_Employees: 'B1111111',firstName: 'Nopparat', lastName: 'Waoram', email: 'arm.noparat@gmail.com', position: 'พนักงานลงทะเบียนพัสดุ'},
    {id: '2', ID_Employees: 'B2222222',firstName: 'arm', lastName: 'noparat', email: 'noparat@gmail.com' ,position: 'พนักงานส่งพัสดุ'}
  ]
  item: any=[]
  positions: any =['','พนักงานลงทะเบียนพัสดุ','พนักงานส่งพัสดุ']
  
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
  put(){
    console.log('add')
 
    console.log(this.item.id)
    console.log(this.item.ID_Employees)
    console.log(this.item.firstName)
    console.log(this.item.lastName)
    console.log(this.item.email)
    
    this.deletes(this.item.id)
  }
  deletes(id){
    console.log('delete')
    console.log(id)
  }
}
