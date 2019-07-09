import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {API_URL, API_USER_HOME, API_USER_LOGIN, API_USER_REGISTER} from '../config'
import { User } from '../models/user';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
   }

   loginUser(data: any):Observable<User>
   {
     let formData=new FormData();
     formData.append('username', data.username);
     formData.append('password', data.password);
     return this.http.post<User>(API_URL + API_USER_LOGIN, formData, {
       withCredentials: true})
   }

   getUser():Observable<User>{
     return this.http.get<User>(API_URL + API_USER_HOME, {withCredentials:true});
   }
}
