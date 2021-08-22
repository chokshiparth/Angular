import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrorMsgService } from 'src/app/errors/error-msg.service';
import { validatePassword } from 'src/app/customvalidations';
import { DbServicesService } from '../dbservices/db-services.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UserinfoprovideService } from "../userinfo/userinfoprovide.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {
  private loginSessionCount !: number;
  private loginSession !: {email:string,jwt:string};

  public loginForm = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,validatePassword()])
  })

  constructor(private requestToDb : DbServicesService,
    private router : Router,
    private _snackBar: MatSnackBar,
    private errorMsgProvider :ErrorMsgService,
    private userInfoProvider : UserinfoprovideService) { }

  ngOnInit(): void {
    this.loginSessionCount = localStorage.length;
    //check if any session exist.
    if(this.loginSessionCount==1){
      this.router.navigate(['/dashboard']); //logged in user
    }
  }

 /**
  * This method used to login user into system.
  */
  loginUser(){
    this.requestToDb.goPostRequest('login',{
      email : this.loginForm.get('email')?.value,
      password : this.loginForm.get('password')?.value
    }).subscribe(response =>{
      //@ts-ignore
      localStorage.setItem(response.email,response.jwt);
      this.router.navigate(['/dashboard']);
    }, error => {
      this.showErrorMessage(error);
    });
  }

  //method to display error message.
  showErrorMessage(error:any){
    let message = this.errorMsgProvider.getErrorMessage(error.status.toString());
    this._snackBar.open(message,"close",{duration:10000});
  }

  //reset form values
  resetAllValues(){
    this.loginForm.reset();
  }

  //redirect to registration form.
  routeToRegistrationForm(){
    this.router.navigate(['/createaccount']);
  }
}