import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {log} from "util";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;
  public response: string;
  public name: string;
  constructor(private http: HttpClient, private router:Router) { }

  ngOnInit(): void {
  }

  login(): void{
    {
      console.log('Login button clicked...');
      this.http.get(`http://localhost:8080/user/login?email=${this.email}&password=${this.password}`, {responseType: 'text'}).subscribe(data => {if(data =='true'){
        this.http.get(`http://localhost:8080/user/getNameByEmail?email=${this.email}`, {responseType: 'text'}).subscribe(data => {this.name = data; this.router.navigate(['/UserProfile', this.name]);});}});
        // this.http.get(`http://localhost:8080/user/getNameByEmail?email=${this.email}`, {responseType: 'text'}).subscribe(data => this.name = data);
        // console.log(this.response);
    }
  }

}
