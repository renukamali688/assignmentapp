import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username:any;
password:any;
  
  constructor(private _authService:AuthService,private _router: Router) { }

  ngOnInit(): void {
  }

  login(username:any,password:any) {
   console.log(username,password);

  var result = this._authService.checkUsernameAndPwd(username,password);
  if (result == true) {
    window.alert('Login SuccessFully !!');
    this._router.navigate(['home']);

  }else{
    window.alert('Invalid Username or password !!')
    this._router.navigate(['login']);
  }
   
    }
}
