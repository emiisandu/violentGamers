import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import {RegistrationComponent} from "./registration/registration.component";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";


const routes: Routes = [
  { path: 'registration', component:RegistrationComponent, pathMatch: 'full'},
  { path: 'home', component:HomeComponent},
  { path:'**', redirectTo:'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false} )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
