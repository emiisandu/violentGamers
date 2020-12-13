import { BrowserModule } from '@angular/platform-browser';
import {Injectable, NgModule} from '@angular/core';
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
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {User} from "./shared/user.model";
import { UserSkillsComponent } from './user-skills/user-skills.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./material/material.module";


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
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

@Injectable()
export class ShowlistResolver implements Resolve<any> {

  private userData: User

  constructor(private router: Router, private user: User) {
    this.userData = new User();
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    console.log('In Router')
    // this.userData.Email = route.params['email'];
    // this.userData.userId = route.params['id']
    // this.userData.userRole = route.params['role'];
    // this.userService.setUserData(this.userData);
    this.router.navigate(['/UserProfile', {outlets: {details: ['showDetails']}}]);
  }
}
