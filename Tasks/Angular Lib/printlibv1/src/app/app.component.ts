import { Component } from '@angular/core';
import { PrintService } from 'projects/print/src/lib/services/print.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'printlibv1';
  constructor(private router : Router){

  }
  navigateTo(){
    this.router.navigate(['print-stuff']);
  }
}
