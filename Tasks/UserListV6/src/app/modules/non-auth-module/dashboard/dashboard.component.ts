import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { ConnectionService } from 'src/app/helper/services/connection.service';
import { _urls } from 'src/app/shared/utility/connection-url';
import { FormGroup, FormArray, FormBuilder } from "@angular/forms";
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogBoxComponent } from 'src/app/shared/components/delete-dialog-box/delete-dialog-box.component';
import { SessionService } from 'src/app/helper/services/session.service';
import { Router } from '@angular/router';
import { _navigate } from 'src/app/shared/utility/navigation-path';
import { ViewDialogBoxComponent } from 'src/app/shared/components/view-dialog-box/view-dialog-box.component';
import { UpdateUserComponent } from '../../auth-module/shared/update-user/update-user.component';
import { _errorMessages } from 'src/app/shared/utility/messages';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  public  userData       : any = [];
  public  errorCheck     : boolean = false;
  public  formArray     !: FormArray;
  public  userFormGroup !: FormGroup;
  private jwtToken      !: string | null;
  public  messageError  !: string; 
  constructor(
    private conProvider     : ConnectionService,
    private formBuider      : FormBuilder,
    public  dialog          : MatDialog,
    private sessionProvider : SessionService,
    private router          : Router
  ) { }

  
  ngOnInit(): void {
    this.jwtToken = this.sessionProvider.fetchJwtSession();
    if(this.jwtToken != null){
      this.conProvider.goGet(_urls.FIND_ALL_USER,'',this.jwtToken).subscribe(response => {
        this.userData = response;
      },(error:HttpErrorResponse)=>{
        this.errorCheck = true;
        this.setError(error.status);
      });
    }else{
      this.router.navigate([_navigate.login_page]);
    }
  }


  /**
   * @description This method opens delete user's dialog box.
   * @param emailid user's email id.
   */
  public openDeleteDialog(emailid:string):void{
    //open delete dialog
    const dialogRef = this.dialog.open(DeleteDialogBoxComponent,{
      data : {email : emailid, jwt : this.jwtToken}
    });
    //load data after delete user
    dialogRef.afterClosed().subscribe(result=>{
      if(this.jwtToken != null){  
        this.conProvider.goGet(_urls.FIND_ALL_USER,'',this.jwtToken).subscribe(response=>{
          this.userData = response;
        },(error:HttpErrorResponse)=>{
          this.errorCheck = true;
          this.setError(error.status);
        })
      }
    })
  }

  

  /**
   * @description This method opens view user's dialog box.
   * @param emailId user's email id.
   */
  public openViewDialog(emailId:string):void{
    let userInfo;
    this.conProvider.goGet(_urls.FIND_USER_DATA,emailId,this.jwtToken).subscribe((response:any)=>{
      userInfo = {
        city        : response.city.toString(),
        country     : response.country.toString(),
        state       : response.state.toString(),
        email       : response.email.toString(),
        firstname   : response.firstName.toString(),
        lastname    : response.lastName.toString(),
        gender      : response.gender.toString(),
        filename    : response.fileName.toString(),
        phonenumber : response.number.toString()
      }
      const dialogRef = this.dialog.open(ViewDialogBoxComponent,{
        data : userInfo
      });
    });
  }



  /**
   * @description open update user dialog box.
   * @param emailId user's email id.
   */
  public updateUser(emailId:string):void{
   
    let userInfo;
    this.conProvider.goGet(_urls.FIND_USER_DATA,emailId,this.jwtToken).subscribe((response:any)=>{
      userInfo = {
        city        : response.city.toString(),
        country     : response.country.toString(),
        state       : response.state.toString(),
        email       : response.email.toString(),
        firstname   : response.firstName.toString(),
        lastname    : response.lastName.toString(),
        gender      : response.gender.toString(),
        filename    : response.fileName.toString(),
        phonenumber : response.number.toString()
      }
      const dialogRef = this.dialog.open(UpdateUserComponent,{
        data : userInfo
      })
      //load data after delete user
      dialogRef.afterClosed().subscribe(result=>{
        if(this.jwtToken != null){  
          this.conProvider.goGet(_urls.FIND_ALL_USER,'',this.jwtToken).subscribe(response=>{
            this.userData = response;
          },(error:HttpErrorResponse)=>{
            this.errorCheck = true;
            this.setError(error.status);
          })
        }
      })
    });
  }



  /**
   * @description logout user.
   */
  logoutUser(){
    this.sessionProvider.removeSession();
    this.router.navigate([_navigate.login_page]);
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
}