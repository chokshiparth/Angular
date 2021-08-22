import { Directive, ElementRef } from '@angular/core';
import { PrintService } from './print.service';

@Directive({
  selector: '[prntGetStuff]'
})
export class GetStuffDirective {
  innerHTMLText !: any;
  constructor(private el : ElementRef,private printServiceProvider : PrintService) {
    this.printServiceProvider.dir.push(el);
  }
}
