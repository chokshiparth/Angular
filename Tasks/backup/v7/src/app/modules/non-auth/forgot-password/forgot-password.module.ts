import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgotPasswordRoutingModule } from './forgot-password-routing.module';
import { ForgotPasswordComponent } from './forgot-password.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { CoreModule } from 'src/app/core/core.module';
import { VerifyemailComponent } from './verifyemail/verifyemail.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivationScreenComponent } from './activation-screen/activation-screen.component';


@NgModule({
  declarations: [ForgotPasswordComponent, VerifyemailComponent, ResetpasswordComponent, ActivationScreenComponent],
  imports: [
    CommonModule,
    ForgotPasswordRoutingModule,
    MaterialModule,
    CoreModule,
    ReactiveFormsModule
  ]
})
export class ForgotPasswordModule { }
