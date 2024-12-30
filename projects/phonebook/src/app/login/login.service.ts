import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { loginRequest } from './loginRequest';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class LoginService{
  constructor(private http:HttpClient,private router:Router) { }

  login(loginrequest:loginRequest):Observable<boolean>{
    console.log(loginrequest);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      "access-control-allow-origin": "*",
    });

    return this.http.post<boolean>(`${environment.apiEndpoint}/login/`, loginrequest, {
      headers: headers,
    });
  }
  }
