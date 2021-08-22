import { ElementRef, Injectable, ViewChild, ViewChildren } from '@angular/core';
import { GetStuffDirective } from './get-stuff.directive';

@Injectable({
  providedIn: 'root'
})
export class PrintService {

  @ViewChildren(GetStuffDirective) dir : ElementRef[] = [];

  constructor() { 
    
  }

  printStuff(){
    console.log(document.head.outerHTML);
    console.log(this.dir[0].nativeElement.outerHTML);
    console.log(typeof getComputedStyle(this.dir[0].nativeElement));

    const textOne = this.dir[0].nativeElement.outerHTML;
    var oIframe = document.createElement('iframe');
    
    oIframe.setAttribute("style","display:none");
    document.body.appendChild(oIframe);
    var oDocWin = oIframe.contentWindow;
    oDocWin?.window.document.open();
    oDocWin?.window.document.write(document.head.outerHTML);
    oDocWin?.window.document.write(`<body>${textOne}</body>`);
    oDocWin?.print();
  }

}
