import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment.development';
import { ProfileResponse } from './ProfileResponse';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient,private route:Router) { }
  getProfile(){
       const token=localStorage.getItem('token');
       const mobileNumber=localStorage.getItem('mobileNumber');
        const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        });
  return this.http.get<ProfileResponse>(`${environment.apiEndpoint}/profile/`+mobileNumber,{headers});
  }
}
