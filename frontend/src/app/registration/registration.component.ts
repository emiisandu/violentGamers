import { Component, OnInit } from '@angular/core';
import {User} from "../shared/user.model";
import {FormGroup, NgForm, Validators} from '@angular/forms';
import {RegisterService} from './register.service';
import { FormBuilder } from '@angular/forms';

// @ts-ignore
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{

    title = 'registration';

    user: User;
    form: FormGroup;
    registerForm;
    emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

    constructor(
      private registerService: RegisterService,
      private formBuilder: FormBuilder,
      ) {
      this.registerForm = this.formBuilder.group({
        UserName: '',
        Password: '',
        Email: '',
        Lastname: '',
        Firstname:''
      });
    }

    ngOnInit(){
      // this.resetForm();
      this.form = this.formBuilder.group({
        Firstname: ['', Validators.required],
        Lastname: ['', Validators.required],
        UserName: ['', Validators.required],
        Email: ['', Validators.required],
        Password: ['', [Validators.required, Validators.minLength(6)]]
      });
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
      console.log(this.form.value);
      this.registerService.callPost(this.form.value).subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );

    }

}
