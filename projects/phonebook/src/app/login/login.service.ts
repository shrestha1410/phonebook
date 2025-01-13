import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { loginRequest } from './loginRequest';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { LoginResponse } from './loginResponse';
import { GetDetails } from './getDetails';

@Injectable({
  providedIn: 'root'
})
export class LoginService{
  constructor(private http:HttpClient,private router:Router) { }

  login(loginrequest:loginRequest):Observable<LoginResponse>{
    console.log(loginrequest);
    return this.http.post<LoginResponse>(`${environment.apiEndpoint}/login/`, loginrequest);
  }
  }
