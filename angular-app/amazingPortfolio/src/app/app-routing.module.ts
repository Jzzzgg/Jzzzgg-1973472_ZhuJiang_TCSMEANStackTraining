import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path : "\login" , component : LoginComponent},
  {path : "\sign-up" , component : SignUpComponent},
  {path : "\dashboard" , component : DashboardComponent},
  {path : "", redirectTo : "\login" , pathMatch : "full"}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
