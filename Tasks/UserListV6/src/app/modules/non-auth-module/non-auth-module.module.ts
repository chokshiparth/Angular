import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NonAuthModuleRoutingModule } from './non-auth-module-routing.module';
import { NonAuthModuleComponent } from './non-auth-module.component';
import { SessionService } from 'src/app/helper/services/session.service';

//import { ErrorComponent } from 'src/app/shared/components/error/error.component';

@NgModule({
  declarations: [NonAuthModuleComponent],
  imports: [
    CommonModule,
    NonAuthModuleRoutingModule
  ],
  providers:[
    SessionService
  ]
})
export class NonAuthModuleModule { }
