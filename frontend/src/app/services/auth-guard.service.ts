import { Injectable } from '@angular/core';
import {AuthService} from './auth.service' 
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {LocalStorageService}from'angular-web-storage';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

   constructor(
    private authService: AuthService, 
    private router: Router,public local: LocalStorageService
    ) {}
   
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
      console.log('canActivate run');
      
      if(this.local.get('auth')){
        return true;
      }

      this.router.navigate(['/login']);
      return false; 
     }
 

 
}
