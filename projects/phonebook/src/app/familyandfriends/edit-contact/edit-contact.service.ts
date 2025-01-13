import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { NewContact } from '../add-new-contact/NewContact';

@Injectable({
  providedIn: 'root'
})
export class EditContactService {

  constructor( private http:HttpClient) { }
  updateContact(userDetails:NewContact,id:number){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
   return this.http.put(`${environment.apiEndpoint}/familyAndFriends/update/${id}`,userDetails,{headers});
  }
  getContactDetailsById(id:number){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.get<NewContact>(`${environment.apiEndpoint}/familyAndFriends/contact/${id}`, { headers });
  }
}
