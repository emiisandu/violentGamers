import { Component, OnInit } from '@angular/core';
import {User} from "../shared/user.model";
import {NgForm} from '@angular/forms';
import {RegisterService} from './register.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{

    title = 'registration';

    user: User;
    registerForm;
    emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

    constructor(
      private registerService: RegisterService,
      private formBuilder: FormBuilder,
      ) {
      this.registerForm = this.formBuilder.group({
        Username: '',
        Password: '',
        Email: '',
        Lastname: '',
        Firstname:''
      });
      this.user = new User();
    }

    ngOnInit(){
      this.resetForm();
    }

    resetForm(form?:NgForm){
      if(form != null){
        form.reset();
        this.user ={
          UserName: '',
          Password: '',
          Email:'',
          Firstname: '',
          Lastname: ''
        }
      }
    }

    submitForm(customerData){

      this.registerService.callPost(this.user).subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );

    }

}
