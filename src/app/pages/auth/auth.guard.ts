import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { loginServices } from '../login/login.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private loginservices:loginServices){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // console.log("AUTH GUARD =>"+this.loginservices.isLoggedIn);
    // return this.loginservices.isLoggedIn;
    if (localStorage.getItem('isLoggedIn') === null) {
      this.router.navigate(['/login']);
      return false;
  } else {
      return true;
  }
  }
}
