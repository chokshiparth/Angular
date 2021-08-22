import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivationPopUpRoutingModule } from './activation-pop-up-routing.module';
import { ActivationPopUpComponent } from './activation-pop-up.component';

@NgModule({
  declarations: [ActivationPopUpComponent],
  imports: [
    CommonModule,
    ActivationPopUpRoutingModule
  ]
})
export class ActivationPopUpModule { }
