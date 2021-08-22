import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';
import { _navigate } from 'src/app/shared/utility/navigation-path';
import { ConnectionService } from 'src/app/helper/services/connection.service';
import { _urls } from 'src/app/shared/utility/connection-url';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  public emailVerificationFormGroup !:  FormGroup;
  public newPasswordFormGroup       !:  FormGroup

  constructor(
    private _formBuilder :  FormBuilder,
    private router       :  Router,
    private requestToDb  :  ConnectionService
  ) { }

  ngOnInit(): void {
    //create form group for email varification.
    this.emailVerificationFormGroup = this._formBuilder.group({
      email : ['',[Validators.required,Validators.email]]
    });
    //create form group for new password.
    this.newPasswordFormGroup = this._formBuilder.group({
      password: ['',Validators.required],
      confirmpassword : ['',Validators.required]
    })
  }

  /**
   * redirect user to login page.
   */
  redirectToLogin(){
    this.router.navigate([_navigate.login_page]);
  }


  /**
   * @description verify email address of user by sending email on that.
   */
  verifyEmail(){
    this.requestToDb.goGet(_urls.VERIFY_EMAIL,this.emailVerificationFormGroup.get('email')?.value).subscribe(response=>{
      console.log(response);
    });
  }
}