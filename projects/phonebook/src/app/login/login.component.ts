import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { loginRequest } from './loginRequest';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  standalone:true
})
export class LoginComponent {
  title = 'PhoneBook';
  constructor(private loginService: LoginService, private router: Router) {}
  mobileNumber: number = 0;
  password: string = '';
  login() {
    const loginRequest: loginRequest = {
      mobileNumber: this.mobileNumber,
      password: this.password,
    };
    this.loginService.login(loginRequest).subscribe((response) => {
      console.log("Login started------------------------>");
      if(response){
        alert('Login successfull');
        this.router.navigate(['/home']);
      }else{
        alert('Login failed');
      }

    });
  }
  naviagtiontoRegister() {
    this.router.navigate(['/register']);
  }
}
