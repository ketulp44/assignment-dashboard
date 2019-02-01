import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form = new FormGroup({
    userName: new FormControl('', [ Validators.required], ),
    password: new FormControl('', Validators.required, )

  });
  constructor(private auth: AuthService, private route: Router) { }

  ngOnInit() {
  }
  onClickLogIn(): void{
    console.log('inside login start');
      let isLogged: boolean = this.auth.logIn(
        { username: <string>this.form.get('userName').value,
         password: <string>this.form.get('password').value  });
         console.log('inside login end');
  }
}
