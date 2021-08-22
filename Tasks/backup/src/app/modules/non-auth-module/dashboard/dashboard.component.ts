import { Component, Inject, OnInit } from '@angular/core';
import { ConnectionService } from 'src/app/helper/services/connection.service';
import { _urls } from 'src/app/shared/utility/connection-url';
import { FormControl, FormGroup, Validators, FormArray, FormBuilder, FormGroupName } from "@angular/forms";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData{
  email : string,
  jwt : string
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public userData : any = [];
  public formArray !: FormArray;
  public userFormGroup !: FormGroup;
  private jwtToken !: string;
  constructor(
    private conProvider : ConnectionService,
    private formBuider : FormBuilder,
    public dialog: MatDialog
  ) { }

  
  ngOnInit(): void {
    //retrive jwt token.
    if(localStorage.length!=0){
      let key = localStorage.key(0);
      if(key){
        let token = localStorage.getItem(key)?.toString();
        if(token){
          this.jwtToken = token;
        }
      }
    }
    this.conProvider.goGetHeader(_urls.FIND_ALL_USER,this.jwtToken).subscribe(response => {
      this.userData = response;
      // this.userFormGroup = new FormGroup({
      //   userInfo : this.formBuider.array([])
      // })
      // for(let info of this.userData){
      //   (<FormArray>this.userFormGroup.get('userInfo')).push(this.getForm(info));
      // }
      console.log(this.userData);
    });
  }

  getForm(user:any):FormGroup{
    console.log(user);
    return this.formBuider.group({
      id : [user.id],
      name : [user.firstName],
      number : [user.number],
      email : [user.email]
    })
  }

  openDeleteDialog(emailid:string):void{
    const dialogRef = this.dialog.open(DeleteDialogBox,{
      data : {email : emailid, jwt : this.jwtToken}
    });
    dialogRef.afterClosed().subscribe(result=>{
      this.conProvider.goGetHeader(_urls.FIND_ALL_USER,this.jwtToken).subscribe(response=>{
        this.userData = response;
      })
    })
  }
}

@Component({
  selector:'delete-dialog',
  templateUrl:'delete-dialog.html'
})
export class DeleteDialogBox{
  constructor(
    private conProvider : ConnectionService,
    public dialogRef: MatDialogRef<DeleteDialogBox>,
    @Inject(MAT_DIALOG_DATA) public data : DialogData
  ){}
  deleteUser():void{
    console.table(this.data);
    this.conProvider.goDeleteHeader(_urls.DELETE_USER_END_POINT,this.data.email,this.data.jwt).subscribe(response=>{
      this.dialogRef.close();
    },error=>{
      console.log(error);
    })
  }
}