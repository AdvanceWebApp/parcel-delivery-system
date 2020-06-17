import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showprofile',
  templateUrl: './showprofile.component.html',
  styleUrls: ['./showprofile.component.css']
})
export class ShowprofileComponent implements OnInit {

  profiles: any = [
    {id: '1', ID_Employees: 'B5917440',firstName: 'Nopparat', lastName: 'Waoram', email: 'arm.noparat@gmail.com'},
    // {id: '1', ID_Employees: 'B5917440',firstName: 'Nopparat', lastName: 'Waoram', email: 'arm.noparat@gmail.com'}
  ]
  profile: any=[]

  constructor() { 
    this.get();
  }

  ngOnInit(): void {

  }

  get(){
    console.log('get')
  }
  
  itemAdd(profile){
    if(this.profile != profile){
      this.profile = profile
    console.log(this.profile);
    }
  }
  put(){


    console.log('add')
 
    console.log(this.profile.ID_Employees)
    console.log(this.profile.firstName)
    console.log(this.profile.lastName)
    console.log(this.profile.email)

    this.deletes(this.profile.id)

  }

  deletes(id){
    console.log('delete')
    console.log(id)
  }


}
