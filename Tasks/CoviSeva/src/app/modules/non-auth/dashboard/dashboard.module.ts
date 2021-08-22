import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { RequestResourceComponent } from './request-resource/request-resource.component';
import { ResourcesStatusComponent } from './resources-status/resources-status.component';
import { MaterialsModule } from '../../../shared/materials/materials.module';


@NgModule({
  declarations: [
    DashboardComponent,
    LoginComponent,
    RegistrationComponent,
    RequestResourceComponent,
    ResourcesStatusComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialsModule
  ],schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class DashboardModule { }
