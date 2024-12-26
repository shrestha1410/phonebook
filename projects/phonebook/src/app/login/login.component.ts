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
<<<<<<< HEAD
=======
  standalone:true
>>>>>>> 7ee3d2526f078a412c9101c4b97bf8857f6b911a
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
      alert('Login successfull');
      this.router.navigate(['/home']);
    });
  }
  naviagtiontoRegister() {
    this.router.navigate(['/register']);
  }
}
