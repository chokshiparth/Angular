/**
 * @description printMe directive is an attribute directive used to fetch element's
 * property.
 */
import { Directive, ElementRef } from '@angular/core';
import { PrintService } from '../services/print.service';

@Directive({
  selector: '[printMe]'
})
export class PrintMeDirective {

  constructor(private el : ElementRef,private printServiceProvider : PrintService) {
    //push object into array
    this.printServiceProvider.printMeObj.push(this.el);
   }

}
