import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ConnectionService } from 'src/app/helper/services/connection.service';
import { validatePassword } from 'src/app/helper/services/validations';
import { LoaderComponent } from 'src/app/shared/components/loader/loader.component';
import { _messages } from 'src/app/shared/utility/messages';
import { _urls } from 'src/app/shared/utility/connection-url';
import { _navigate } from 'src/app/shared/utility/navigation-path';
import { Router } from '@angular/router';
import { ErrorComponent } from 'src/app/shared/components/error/error.component';
import { ErrorServiceService } from 'src/app/helper/services/error-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginMessage : string    =   _messages.singinMessage;
  public loginCheck   : boolean   =   false;
  public loginForm    : FormGroup =   new FormGroup({
    email : new FormControl('',[Validators.email]),
    password : new FormControl('',[validatePassword()])
  })

  constructor(
    private connectionProvider : ConnectionService,
    private router : Router,
    private errorMessageProvider : ErrorServiceService
  ) { }

  ngOnInit(): void {}

  /**
   * @description reset form.
   */
  resetForm(){
    this.loginForm.reset();
  }

  /**
   * @description login user into system.
   */
  loginUser(){
    this.loginCheck = true;
    let data = {
      email : this.loginForm.get('email')?.value,
      password : this.loginForm.get('password')?.value
    }

    //get login request's response
    this.connectionProvider.goPost(_urls.LOGIN_USER_END_POINT,data).subscribe(response=>{  
      this.loginCheck = false;
      console.log(response);
      //localStorage.setItem(data.email,response.jwt.toString());
      this.router.navigate([_navigate.dashboard]);
    }, error => {
      this.loginCheck = false;
    });
  }
}
