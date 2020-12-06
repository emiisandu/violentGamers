import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import {RegistrationComponent} from "./registration/registration.component";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {UserprofileComponent} from "./userprofile/userprofile.component";

const routes: Routes = [
  { path: 'registration', component:RegistrationComponent, pathMatch: 'full'},
  { path : 'UserProfile', component : UserprofileComponent },
  {path: 'UserProfile/:name', component: UserprofileComponent },
  { path: 'login', component:LoginComponent},
  { path: 'home', component:HomeComponent},
  { path:'**', redirectTo:'home' }
];

// @ts-ignore
@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false} )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
