import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/core/interface/members';
import { _urls } from 'src/app/core/interface/url';
import { ConnectionService } from 'src/app/core/services/connection.service';

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
  ) { }

  ngOnInit(): void {
  }

  /**
  * delete user from the database.
  */
  deleteUser():void{
    this.conProvider.goDeleteHeader(_urls.DELETE_USER_END_POINT,this.data.email,this.data.jwt).subscribe(response=>{
      this.dialogRef.close();
    },(error:HttpErrorResponse)=>{
      this.errorCheck = true;
      // this.setError(error.status);
    })
  }

}
