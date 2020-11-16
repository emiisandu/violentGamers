import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../shared/user.model";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient: HttpClient) { }

  callPost(user:User){
    return this.httpClient.post('http://127.0.0.1:5000/register', {email:user.Email, password:user.Password});
  }
}
