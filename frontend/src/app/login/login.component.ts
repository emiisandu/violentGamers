import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {log} from "util";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;
  public response: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  login(): void{
    {
      console.log('Login button clicked...');
      this.http.get(`http://localhost:8080/user/login?email=${this.email}&password=${this.password}`, {responseType: 'text'}).subscribe(data => log(data));
    }
  }

}
