import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from 'src/app/registration/registration.component';
import { LoginComponent } from 'src/app/login/login.component';
import { ActivationPopupComponent } from 'src/app/activation-popup/activation-popup.component';
import { BodyComponent } from './body/body.component';
const routes: Routes = [
  {
    path: 'createaccount',
    component : RegistrationComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login'
  },
  {
    path:'activation-popup',
    component: ActivationPopupComponent
  },
  {
    path:'dashboard',
    component:BodyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
