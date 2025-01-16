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
    return this.http.get(`${environment.apiEndpoint}/logout`).subscribe((response)=>{
      console.log(response);
      alert("Session LogOut")
      this.router.navigateByUrl("/login");
    })
  }
}
