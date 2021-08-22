import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivationScreenComponent } from './activation-screen/activation-screen.component';
import { ForgotPasswordComponent } from './forgot-password.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { VerifyemailComponent } from './verifyemail/verifyemail.component';

const routes: Routes = [
  {
    path:'',
    component: ForgotPasswordComponent,
    children:[
      {
        path:'',
        pathMatch: 'full',
        redirectTo: 'verify-email'
      },
      {
        path:'verify-email',
        component: VerifyemailComponent
      },
      {
        path:'reset-password',
        component: ResetpasswordComponent
      },
      {
        path:'resetactivation',
        component: ActivationScreenComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForgotPasswordRoutingModule { }
