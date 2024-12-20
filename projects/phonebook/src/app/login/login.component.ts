import { Component } from '@angular/core';
import {LoginService} from "./login.service"
import { loginRequest } from './loginRequest';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private loginService:LoginService,private router:Router){}
  mobileNumber:number=0;
  password:string=';'
  login(){
    const loginRequest:loginRequest={
     mobileNumber:this.mobileNumber,
     password:this.password
    }
    this.loginService.login(loginRequest).
    subscribe(response=>{
      alert("Login successfull");
      this.router.navigate(['/home']);
    })
   }
}
