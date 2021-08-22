import { Component, Input, OnInit } from '@angular/core';
import { _errorMessages } from 'src/app/shared/utility/messages';

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
    console.log("In error component.");
  }

  /**
   * @description It closes error message pop-up.
   */
  closeErrorMessage(){
    document.getElementById('error-message')?.setAttribute('style','display:none');
  }
}
