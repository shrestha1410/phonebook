import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FamilyandfriendsService {
  constructor(private http:HttpClient) { }
  getList(id:number){
    return this.http.get(`${environment.apiEndpoint}/familyAndFriend/`+id);
  }
}
