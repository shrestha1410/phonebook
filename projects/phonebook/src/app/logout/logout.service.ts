import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private http:HttpClient,private router:Router) { }
  logoutSession(){
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      return this.router.navigateByUrl("/login");
  }
}
