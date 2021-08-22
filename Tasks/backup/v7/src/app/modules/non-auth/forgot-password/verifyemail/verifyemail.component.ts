import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { _navigate } from 'src/app/core/interface/navigate';
import { _urls } from 'src/app/core/interface/url';
import { ConnectionService } from 'src/app/core/services/connection.service';

@Component({
  selector: 'app-verifyemail',
  templateUrl: './verifyemail.component.html',
  styleUrls: ['./verifyemail.component.css']
})
export class VerifyemailComponent implements OnInit {

  public userEmail : FormGroup = new FormGroup({
    emailId : new FormControl('',[Validators.email,Validators.required])
  })
  constructor(
    private router : Router,
    private connectionProvider : ConnectionService
  ) { }

  ngOnInit(): void {
  }

  /**
   * @description redirect user to login page.
   */
  goToLogin(){
    this.router.navigate([_navigate.login_page]);
  }

  /**
   * @description verify email address.
   */
  verifyEmail(){
    console.log(this.userEmail.value);
    this.connectionProvider.goGet(_urls.FORGOT_PASSWORD_EMAIL,this.userEmail.get('emailId')?.value).subscribe(response=>{
      this.router.navigate([_navigate.resetactivation],{queryParams:{id:this.userEmail.get('emailId')?.value}});
    },error=>{
      console.log(error);
    });
  }

}
