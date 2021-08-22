import { NgModule } from '@angular/core';
import { PrintMeDirective } from './directives/print-me.directive';
import { PrintService } from './services/print.service';

@NgModule({
  declarations: [
    PrintMeDirective
  ],
  imports: [],
  exports: [
    PrintMeDirective
  ],
  providers:[
    PrintService
  ]
})
export class PrintModule { }
