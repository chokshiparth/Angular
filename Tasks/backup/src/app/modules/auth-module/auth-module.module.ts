import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthModuleRoutingModule } from './auth-module-routing.module';
import { AuthModuleComponent } from './auth-module.component';
import { ConnectionService } from 'src/app/helper/services/connection.service';

@NgModule({
  declarations: [AuthModuleComponent],
  imports: [
    CommonModule,
    AuthModuleRoutingModule
  ],
  providers:[ ConnectionService ]
})
export class AuthModuleModule { }
