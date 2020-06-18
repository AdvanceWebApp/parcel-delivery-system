import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RegistserviceService } from 'src/app/services/registservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-track-package',
  templateUrl: './track-package.component.html',
  styleUrls: ['./track-package.component.css']
})
export class TrackPackageComponent implements OnInit {

  regist:any=[]
  regtra:any=[]
  

  REGForm = new FormGroup({
    id : new FormControl('')
  })


  constructor(private reg: RegistserviceService,private router: Router) {

   }

  Registertrack(){
    console.log(this.REGForm)
    console.log(this.REGForm.value)
    this.reg.REGTrack(this.REGForm.value).subscribe(
      data=> {
        alert('Successfully')
        this.regtra = data;
        console.log(this.regtra)
        this.REGForm.reset();
      },
      err=>{
        alert(err)
      }
    )
  }

  ngOnInit(): void {
  }

}
