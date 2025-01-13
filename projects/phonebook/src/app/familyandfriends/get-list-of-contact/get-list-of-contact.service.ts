import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { GetDetails } from '../../login/getDetails';

@Injectable({
  providedIn: 'root'
})
export class GetListOfContactService {

  constructor(private http:HttpClient) { }
  getList(){

    const token=localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    const id= localStorage.getItem('id');
    return this.http.get(`${environment.apiEndpoint}/familyAndFriends/`
      +id,{headers });
  }
  getidByMobileNumber(){
    const token=localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    const mobileNumber=localStorage.getItem('mobileNumber');
   return this.http.get<GetDetails>(`${environment.apiEndpoint}/user/getUserByMobile/`+
      mobileNumber,{ headers });
  }
}
