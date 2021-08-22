import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NonAuthModuleRoutingModule } from './non-auth-module-routing.module';
import { NonAuthModuleComponent } from './non-auth-module.component';


@NgModule({
  declarations: [NonAuthModuleComponent],
  imports: [
    CommonModule,
    NonAuthModuleRoutingModule
  ]
})
export class NonAuthModuleModule { }
