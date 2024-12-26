<<<<<<< HEAD
=======
import { FormsModule } from '@angular/forms';
>>>>>>> 7ee3d2526f078a412c9101c4b97bf8857f6b911a
import { RegisterRequest } from './RegisterRequest';
import { RegisterService } from './register.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
<<<<<<< HEAD
=======
  standalone: true
>>>>>>> 7ee3d2526f078a412c9101c4b97bf8857f6b911a
})
export class RegisterComponent {
  firstName: string = '';
  lastName: string = '';
  password: string = '';
  mobileNumber: number = 0;
  addressLine1: string = '';
  addressLine2: string = '';

  constructor(
    private registerService: RegisterService,
    private router: Router
  ) {}
  register() {
    const registerRequest: RegisterRequest = {
      firstName: this.firstName,
      lastName: this.lastName,
      password: this.password,
      mobileNumber: this.mobileNumber,
      addressLine1: this.addressLine1,
      addressLine2: this.addressLine2,
    };
    this.registerService.register(registerRequest).subscribe((data) => {
      alert('User registerd successfiully');
      this.router.navigate(['/login']);
    });
  }
  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
