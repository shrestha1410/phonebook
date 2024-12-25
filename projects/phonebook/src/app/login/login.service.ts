import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { loginRequest } from './loginRequest';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class LoginService{
  constructor(private http:HttpClient,private router:Router) { }

  login(loginrequest:loginRequest):Observable<any>{
   return this.http.post(`${environment.apiEndpoint}/login`,loginrequest);
  }
}
