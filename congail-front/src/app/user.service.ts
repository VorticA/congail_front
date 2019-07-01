import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {API_URL, API_USER_HOME, API_USER_LOGIN, API_USER_REGISTER} from './config'
import { User } from './models/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
   }

   public getUser(): void
   {
    this.http.get(API_URL + API_USER_HOME).subscribe(data =>{ if (data['error']) console.log(data)});
   }
}
