import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Plans } from './Plans';

@Injectable({
  providedIn: 'root'
})
export class PlansService {
  constructor(private http:HttpClient) { }
  getAllPlans(){
    const token=localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<Plans>(`${environment.apiEndpoint}/plans/`,{headers});
  }
}
