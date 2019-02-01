import { Injectable } from '@angular/core';
import {User} from './user';
const users: User[] = [
  {username : "ketulp44", password: "ketul8652"}
];
// const authenticated = false;
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authenticated: boolean = false;
  constructor() { }

  logIn(user: User): boolean{
    console.log('authenticated ' + this.authenticated);
    for (const usr of users) {
      if ( usr.username === user.username && usr.password === user.password){
        this.authenticated = true;
        return true;
      }
    }
    return false;

  }
  isAuthenticated(): boolean {
    return this.authenticated;
  }
}
