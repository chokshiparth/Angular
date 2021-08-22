import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { _errorMessages, _messages } from 'src/app/core/interface/messages';
import { _navigate } from 'src/app/core/interface/navigate';
import { _urls } from 'src/app/core/interface/url';
import { SessionService } from 'src/app/core/services/session.service';
import { ConnectionService } from '../../../core/services/connection.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public loginMessage : string    =   _messages.singinMessage;
  public loginCheck   : boolean   =   false;
  public errorCheck   : boolean   =   false;
  public messageError !: any;

  public loginForm    : FormGroup =   new FormGroup({
    email : new FormControl('',[Validators.required, Validators.email]),
    password : new FormControl('',[Validators.required])
  })
  constructor(
    private connectionProvider : ConnectionService,
    private router             : Router,
    private sessionProvider    : SessionService
  ) { }

  ngOnInit(): void {
    if(this.sessionProvider.fetchJwtSession() != null){
      this.router.navigate([_navigate.dashboard]);
    }
  }


  /**
   * @description login user into system.
   */
  loginUser(){
    let data = {
      email    : this.loginForm.get('email')?.value,
      password : this.loginForm.get('password')?.value
    }
    this.loginCheck = true;
    //get login request's response
    this.connectionProvider.goPost(_urls.LOGIN_USER_END_POINT,data).subscribe(response=>{  
      this.loginCheck = false;
      //@ts-ignore
      this.sessionProvider.createSession({key:data.email,value:response.jwt.toString()});
      this.router.navigate([_navigate.dashboard]);
    },(error : HttpErrorResponse) => {
      this.loginCheck = false;
      this.errorCheck = true;
      this.setError(error.status);
      // this.loginForm.get('email')?.setErrors({wrongUserName : true});
      // this.loginForm.get('email')?.setErrors({wrongUserPassword : true});
    });
  }

  
  /**
   * @description It sets error message.
   * @param status error status code.
   * @example 404 not found.
   */
   setError(status:number){
    for(let error of _errorMessages){
      if(error.status === status){
        this.messageError = error.message;
        setInterval(()=>{
          this.errorCheck = false;
        },5000)
      }
    }
  }

  /**
   * @description redirect user to reset password module.
   */
   redirectToResetPassword(){
     this.router.navigate([_navigate.forgotpassword])
   }


  /**
   * @description reset form.
   */
   resetForm(){
    this.loginForm.reset();
  }

  /**
   * @description redirect user to registration module.
   */
  redirectToRegistration(){
    this.router.navigate([_navigate.registration_page]);
  }
  
}