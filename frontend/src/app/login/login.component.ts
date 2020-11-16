import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

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
      console.log('ok');
      // @ts-ignore
      // tslint:disable-next-line:max-line-length
      this.http.post('http://127.0.0.1:5000/login', 'Welcome ' + this.email + ' ' + this.password + '!', {responseType: 'text'}).subscribe(data => this.response = data);
    }
  }

}
