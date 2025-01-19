import { Component, signal } from '@angular/core';
import { LoginService } from './login.service';
import { loginRequest } from './loginRequest';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
@Component({
  imports: [FormsModule,MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
  templateUrl: './login.component.html',
  standalone:true,
})
export class LoginComponent {
  title = 'PhoneBook';
  constructor(private loginService: LoginService,
              private router: Router) {}
  mobileNumber: number = 0;
  password: string = '';
  login() {
    const loginRequest: loginRequest = {
      mobileNumber: this.mobileNumber,
      password: this.password,
    };
    this.loginService.login(loginRequest).subscribe((response) => {
      console.log("Login started------------------------>");
      if(response && response.token){
        localStorage.setItem('token',response.token);
        localStorage.setItem('mobileNumber',this.mobileNumber.toString());
        localStorage.setItem('loginUserIs',JSON.stringify(response.loginUserIs))
        console.log(response)
        alert('Login successfull');
        this.router.navigate(['/familyandfriends/getListOfContact']);
      }else{
        alert('Login failed');
      }

    });
  }
  naviagtiontoRegister() {
    this.router.navigate(['/register']);
  }
    hide = signal(true);
    clickEvent(event: MouseEvent) {
      this.hide.set(!this.hide());
      event.stopPropagation();
    }
}
