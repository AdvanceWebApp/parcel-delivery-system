import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {AuthService} from '../../../services/auth.service';
@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {

  constructor(private router: Router,private auth: AuthService) { }

  ngOnInit(): void {
  }

  signOut(){
    console.log('signOut')
    this.auth.signOut();
    this.router.navigate(['/login'])
  }
}
