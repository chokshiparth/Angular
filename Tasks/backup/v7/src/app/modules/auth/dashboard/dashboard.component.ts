import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { _errorMessages } from 'src/app/core/interface/messages';
import { _navigate } from 'src/app/core/interface/navigate';
import { _urls } from 'src/app/core/interface/url';
import { ConnectionService } from 'src/app/core/services/connection.service';
import { SessionService } from 'src/app/core/services/session.service';
import { DeleteDialogBoxComponent } from 'src/app/shared/components/delete-dialog-box/delete-dialog-box.component';
import { UpdateUserComponent } from 'src/app/shared/components/update-user/update-user.component';
import { ViewDialogBoxComponent } from 'src/app/shared/components/view-dialog-box/view-dialog-box.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  
  public  errorCheck     : boolean = false;
  public  userData      !: any;
  public  formArray     !: FormArray;
  public  userFormGroup !: FormGroup;
  public  messageError  !: string;
  
  constructor(
    private connectionProvider  : ConnectionService,
    private sessionProvider     : SessionService,
    private router              : Router,
    public  dialog              : MatDialog,
  ) { }
  


  ngOnInit(): void { 
    if(this.sessionProvider.fetchJwtSession() != null){
      this.connectionProvider.goGet(_urls.FIND_ALL_USER,'',this.sessionProvider.fetchJwtSession()).subscribe(response => {
        this.userData = response;
      },(error:HttpErrorResponse)=>{
        this.errorCheck = true;
        this.setError(error.status);
      });
    }
  }



  /**
   * @description this method will set user's information.
   * @param response object of response.
   */
  private setUserInfo (response:any){
    let user = {
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
  }



  /**
   * @description open view dialog box to see user's details.
   * @param emailId user's email id
   */
  openViewDialog(emailId:string){
    this.connectionProvider.goGet(_urls.FIND_USER_DATA,emailId,this.sessionProvider.fetchJwtSession()).subscribe((response:any)=>{
      const dialogRef = this.dialog.open(ViewDialogBoxComponent,{
        data : this.setUserInfo(response)
      });
    });
  }



  /**
   * @description open update user dialog box to update user details.
   * @param emailId user's email id
   */
  updateUser(emailId:string){
    this.connectionProvider.goGet(_urls.FIND_USER_DATA,emailId,this.sessionProvider.fetchJwtSession()).subscribe((response:any)=>{
      const dialogRef = this.dialog.open(UpdateUserComponent,{
        data : this.setUserInfo(response)
      })
      //load data after update user
      dialogRef.afterClosed().subscribe(result=>{
        if(this.sessionProvider.fetchJwtSession() != null){
          this.connectionProvider.goGet(_urls.FIND_ALL_USER,'',this.sessionProvider.fetchJwtSession()).subscribe(response=>{
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
   * @description open confirmation dialog box to delete user.
   * @param emailId user's email id
   */
  openDeleteDialog(emailId:string){
      //open delete dialog
      const dialogRef = this.dialog.open(DeleteDialogBoxComponent,{
        data : {email : emailId, jwt : this.sessionProvider.fetchJwtSession()}
      });
      //load data after delete user
      dialogRef.afterClosed().subscribe(result=>{
        if(this.sessionProvider.fetchJwtSession() != null){  
          this.connectionProvider.goGet(_urls.FIND_ALL_USER,'',this.sessionProvider.fetchJwtSession()).subscribe(response=>{
            this.userData = response;
          },(error:HttpErrorResponse)=>{
            this.errorCheck = true;
            this.setError(error.status);
          })
        }
      })
  }



  /**
   * @description log out user from the system. 
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
