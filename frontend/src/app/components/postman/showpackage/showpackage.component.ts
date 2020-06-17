import { Component, OnInit } from '@angular/core';
// import { PackageService } from 'src/app/services/package.service';

@Component({
  selector: 'app-showpackage',
  templateUrl: './showpackage.component.html',
  styleUrls: ['./showpackage.component.css']
})
export class ShowpackageComponent implements OnInit {

  packages: any = [
    {id: 1000000001, name: 'Thiwat H.', phone: '0912345678', address: '258 main st.', 
    district: 'district', country: 'li state', city: 'Bangkok'},
    {id: 1000000002, name: 'Salita P.', phone: '0987654321', address: '205/32 sub st.', 
    district: 'none', country: 'jul state', city: 'Chiang-Mai'},
  ]
  package: any = []

  

  
  constructor() {
    // this.onLoading();
    this.get();
  }

  ngOnInit(): void {
  }

  get(){
    console.log('get')
  }

  // onLoading(){
  //   try {
  //     this.ps.getPackage().subscribe(
  //       data => {
  //         this.package = data;
  //       },
  //       err => {
  //         console.log(err)
  //       }
  //     );
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  i: any;

  getArray(item){
    this.i = item;
  }

  clickConfirm(){
    alert("ยืนยันการจำหน่าย");
  }

  clickCancel(){
    alert("ยกเลิกการจำหน่าย");
  }


}
