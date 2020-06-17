import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-mynavbar',
  templateUrl: './mynavbar.component.html',
  styleUrls: ['./mynavbar.component.css']
})
export class MynavbarComponent implements OnInit {

  constructor(private router: Router,private auth: AuthService) { }

  ngOnInit(): void {
  }

  signOut(){
    console.log('signOut')
    this.auth.signOut();
    this.router.navigate(['/login'])
  }

}
