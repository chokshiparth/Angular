import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConnectionService } from 'src/app/helper/services/connection.service';
import { _urls } from '../../utility/connection-url';
import { DialogData } from 'src/app/shared/utility/members';
import { HttpErrorResponse } from '@angular/common/http';
import { _errorMessages } from '../../utility/messages';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-delete-dialog-box',
  templateUrl: './delete-dialog-box.component.html',
  styleUrls: ['./delete-dialog-box.component.css']
})

export class DeleteDialogBoxComponent implements OnInit {
  public messageError !: any;
  public errorCheck    : boolean = false;
  constructor(
    private conProvider     : ConnectionService,
    public dialogRef        : MatDialogRef<DeleteDialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) 
    public data             : DialogData
  ){}
  
  ngOnInit(): void {
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
      }
    }
  }

  
  /**
   * delete user from the database.
   */
  deleteUser():void{
    this.conProvider.goDeleteHeader(_urls.DELETE_USER_END_POINT,this.data.email,this.data.jwt).subscribe(response=>{
      this.dialogRef.close();
    },(error:HttpErrorResponse)=>{
      this.errorCheck = true;
      this.setError(error.status);
    })
  }

}
