import { Component, OnInit } from '@angular/core';
import { PrintService } from 'projects/print/src/lib/services/print.service';

@Component({
  selector: 'app-print-stuff',
  templateUrl: './print-stuff.component.html',
  styleUrls: ['./print-stuff.component.css']
})
export class PrintStuffComponent implements OnInit {

  constructor(private printSeriveProvider : PrintService) { }

  ngOnInit(): void {
  }

  printContent(){
    this.printSeriveProvider.print();
  }
}
