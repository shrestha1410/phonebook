import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterRequest } from './RegisterRequest';
<<<<<<< HEAD
=======
import { environment } from '../../environments/environment.development';
>>>>>>> 7ee3d2526f078a412c9101c4b97bf8857f6b911a

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }
   register(reqisterRequest:RegisterRequest){
<<<<<<< HEAD
    return this.http.post("/register",reqisterRequest);
=======
    return this.http.post(`${environment.apiEndpoint}/register`,reqisterRequest);
>>>>>>> 7ee3d2526f078a412c9101c4b97bf8857f6b911a
}
}
