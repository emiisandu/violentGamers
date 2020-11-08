import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import {RegistrationComponent} from "./registration/registration.component";
import {AppComponent} from "./app.component";


const routes: Routes = [
  { path: 'registration', component:RegistrationComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false} )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
