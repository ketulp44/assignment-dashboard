import { Injectable } from '@angular/core';
import { AuthService} from './auth.service';
import {Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
  
  constructor(private auth: AuthService, private router: Router) { }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('inside canActive');
    if (this.auth.isAuthenticated()) {
        return true;
    }

    // navigate to login page
    this.router.navigate(['/login']);
    // you can save redirect url so after authing we can move them back to the page they requested
    return false;
  }
}
