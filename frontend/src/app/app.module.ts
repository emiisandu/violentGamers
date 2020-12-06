import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UserSkillsComponent } from './user-skills/user-skills.component';
import { MatSliderModule } from '@angular/material/slider';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {MatOptionModule} from "@angular/material/core";
import { MatInputModule } from "@angular/material/input";

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    RegistrationComponent,
    HomeComponent,
    LoginComponent,
    UserprofileComponent,
    UserSkillsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatOptionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

