import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ConnectionService } from './services/connection.service';
import { SessionService } from './services/session.service';
import { ValidationService } from './services/validation.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthenticationGuard } from './guard/authentication.guard';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],providers:[
    ConnectionService,
    SessionService,
    ValidationService,
    AuthGuardService,
    AuthenticationGuard
  ]
})
export class CoreModule { }