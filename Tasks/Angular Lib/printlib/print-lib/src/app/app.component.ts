import { Component } from '@angular/core';
import { PrintService } from 'projects/print/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'print-lib';

  constructor(
    private printServiceProvider : PrintService
  ){}

  printThis(){
    this.printServiceProvider.printStuff();
  }

}
