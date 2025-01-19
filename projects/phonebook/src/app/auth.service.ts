import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {jwtDecode} from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }
  isTokenExpired(token:string):boolean{
    try {
      const decodedToken: any = jwtDecode(token);
      const currentTime = Math.floor(Date.now() / 1000);
      return decodedToken.exp < currentTime;
    } catch (error) {
      console.error('Error decoding token:', error);
      return true;
    }
  }
  handleTokenExpiration() {
    const token = localStorage.getItem('authToken');
    if (!token || this.isTokenExpired(token)) {
      localStorage.removeItem('authToken');
      this.router.navigate(['/login']);
    }
  }

}
