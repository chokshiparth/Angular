import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NonAuthRoutingModule } from './non-auth-routing.module';
import { ActivationpopupComponent } from './activationpopup/activationpopup.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [ActivationpopupComponent],
  imports: [
    CommonModule,
    NonAuthRoutingModule,
    CoreModule
  ]
})
export class NonAuthModule { }
