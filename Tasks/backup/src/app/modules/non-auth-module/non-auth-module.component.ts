import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-non-auth-module',
  templateUrl: './non-auth-module.component.html',
  styleUrls: ['./non-auth-module.component.css']
})
export class NonAuthModuleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('in non auth');
  }

}
