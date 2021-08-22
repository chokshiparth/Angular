import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  //default error messsage
  public errorMessage : string = 'INTERNAL SERVER ERROR :(';

  constructor() { }

  ngOnInit(): void {
  }

  closeErrorMessage(){
    document.getElementById('error-message')?.setAttribute('style','display:none');
  }
}
