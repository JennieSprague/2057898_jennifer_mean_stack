import { TdfLoginPageComponent } from './tdf-login-page/tdf-login-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path:"home/:uname",component:DashboardComponent}, // uname is use to receive the value from a path
  {path:"register",component:RegistrationComponent},
  {path:"login", component:TdfLoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
