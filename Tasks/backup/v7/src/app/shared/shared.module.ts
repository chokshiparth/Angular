import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { MaterialModule } from './material.module';
import { ErrorComponent } from './components/error/error.component';
import { DeleteDialogBoxComponent } from './components/delete-dialog-box/delete-dialog-box.component';
import { ViewDialogBoxComponent } from './components/view-dialog-box/view-dialog-box.component';
import { CoreModule } from '../core/core.module';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoaderComponent, 
    ErrorComponent, 
    DeleteDialogBoxComponent, 
    ViewDialogBoxComponent, 
    UpdateUserComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    CoreModule
  ],
  exports:[
    LoaderComponent,
    ErrorComponent,
    DeleteDialogBoxComponent,
    ViewDialogBoxComponent,
    UpdateUserComponent
  ]
})
export class SharedModule {
  constructor(){
    console.log("I loaded");
  }
}
