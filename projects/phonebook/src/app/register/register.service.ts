import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterRequest } from './RegisterRequest';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }
   register(reqisterRequest:RegisterRequest){
    return this.http.post("/register",reqisterRequest);
}
}
