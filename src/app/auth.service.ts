import { Injectable } from '@angular/core';
const users = [
  {username : "ketulp44", password: "ketul8652"}
];
// const authenticated = false;
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authenticated: boolean = false;
  constructor() { }
  
  logIn(user : any): boolean{
    console.log('authenticated ' + this.authenticated);
    let tmp = users.filter((usr)=>{
      if(usr.username=== <string>user.username && usr.password===<string>user.password){
        console.log('authenticated if ' + this.authenticated);
        return true;
      }else{
        console.log('authenticated else' + this.authenticated);
        return false;
      }
    });
    if(tmp.length=== 1){
      this.authenticated = true;
      console.log('authenticated ' + this.authenticated);
      return true;
    }else{
      return false;
    }

  }
  isAuthenticated():boolean {
    return this.authenticated;
  }
}
