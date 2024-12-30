import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterRequest } from './RegisterRequest';

import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }
   register(reqisterRequest:RegisterRequest){
    return this.http.post(`${environment.apiEndpoint}/register/`,reqisterRequest);
}
}
