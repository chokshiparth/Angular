import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from "./login.component";
import { LoginRoutingModule } from "./login-routing.module";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from "@angular/material/divider";
import { MatButtonModule } from "@angular/material/button";
import { MatTooltipModule } from '@angular/material/tooltip';
import { LoaderComponent } from 'src/app/shared/components/loader/loader.component';
import { ErrorComponent } from 'src/app/shared/components/error/error.component';

@NgModule({
  declarations: [LoginComponent,
    LoaderComponent,
    ErrorComponent
],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDividerModule,
    MatButtonModule,
    MatTooltipModule,
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
  // providers:[ConnectionService]
})
export class LoginModule { }
