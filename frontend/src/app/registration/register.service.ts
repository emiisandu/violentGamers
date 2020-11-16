import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../shared/user.model";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient: HttpClient) { }

  callPost(user:User){
    return this.httpClient.post('localhost:8080/registeruser', {email:user.Email, password:user.Password});
  }
}
