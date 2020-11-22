import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {User} from "../shared/user.model";
import {catchError} from "rxjs/operators";
import {throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private httpClient: HttpClient
  ) { }

  callPost(user: User){
    console.log("callPost");
    console.log(user);
    console.log({username:user.UserName, password:user.Password, firstName:user.Firstname, lastName:user.Lastname, email:user.Email });
    // return this.httpClient.post(`http://localhost:8080/user/register`, {username: user.UserName, password: user.Password, firstName: user.Firstname, lastName: user.Lastname, email: user.Email }).pipe(catchError(this.handleError));
    return this.httpClient.post(`http://localhost:8080/user/register?username=${user.UserName}&password=${user.Password}&firstName=${user.Firstname}&lastName=${user.Lastname}&email=${user.Email}`, { }).pipe(catchError(this.handleError));

  }

  handleError(error: HttpErrorResponse) {
    return throwError(error);
  }
}
