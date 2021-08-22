import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  //default error messsage
  @Input()public errorMessage : string = 'INTERNAL SERVER ERROR :(';

  constructor() { }

  ngOnInit(): void {
  }

  
  /**
   * @description It closes error message pop-up.
   */
   closeErrorMessage(){
    document.getElementById('error-message')?.setAttribute('style','display:none');
  }

}
