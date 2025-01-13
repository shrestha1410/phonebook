import { NewContact } from './NewContact';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AddNewContactService {

  constructor(private http:HttpClient) { }

  saveNewContact(newContact:NewContact){
    const token=localStorage.getItem('token');
    const id=localStorage.getItem('id');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    console.log(localStorage.getItem('token'));
    console.log(localStorage.getItem('id'));
   return this.http.post(`${environment.apiEndpoint}/familyAndFriends/add/`+id,newContact,{ headers });
  }
}
