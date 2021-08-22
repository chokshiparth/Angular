import { NgModule } from '@angular/core';
import { PrintComponent } from './print.component';
import { GetStuffDirective } from './get-stuff.directive';



@NgModule({
  declarations: [
    PrintComponent,
    GetStuffDirective
  ],
  imports: [
  ],
  exports: [
    PrintComponent,
    GetStuffDirective
  ]
})
export class PrintModule { }
