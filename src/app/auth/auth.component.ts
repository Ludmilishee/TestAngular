import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  loginStatus: boolean;

  constructor(private authServie: AuthService) { }

  ngOnInit() {
    this.loginStatus = this.authServie.getLoginStatus();
  }

  userLogin(): void {
    this.loginStatus = true;
    this.authServie.login();
  }

  userLogout(): void {
    this.loginStatus = false;
    this.authServie.logout();
  }
}
