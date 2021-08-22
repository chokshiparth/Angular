import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivationpopupComponent } from './activationpopup/activationpopup.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'login'
  },
  {
    path:'login',
    loadChildren: () => import('./login/login.module').then(m=>m.LoginModule)
  },
  {
    path:'register',
    loadChildren: () => import('./registration/registration.module').then(m=>m.RegistrationModule)
  },
  {
    path:'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then(m=>m.ForgotPasswordModule)
  },
  {
    path:'activationpopup',
    component: ActivationpopupComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NonAuthRoutingModule { }
