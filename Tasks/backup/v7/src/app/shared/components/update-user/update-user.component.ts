import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ViewUserDialogData } from 'src/app/core/interface/members';
import { _urls } from 'src/app/core/interface/url';
import { ConnectionService } from 'src/app/core/services/connection.service';
import { SessionService } from 'src/app/core/services/session.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  private formBuider : FormBuilder = new FormBuilder;
  public updateUser !: FormGroup;
  
  public countryList  : any = [];
  public stateList    : any = [];
  public cityList     : any = [];

  public countryName !: any;
  public stateName   !: any;
  public cityName    !: any;
  
  constructor(
    public dialogRef        : MatDialogRef<UpdateUserComponent>,
    @Inject(MAT_DIALOG_DATA) 
    public data             : ViewUserDialogData,
    private requestToDb     : ConnectionService,
    private sessionProvider : SessionService
  ) { }

  ngOnInit(): void {
    this.updateUser = this.getForm();
    console.log(this.data);
    this.requestToDb.goGet(_urls.FETCH_COUNTRY_END_POINT,'').subscribe(data=>{
      this.countryList = data;
    });
  }

  /**
   * @description This method creates object of FormGroup.
   * @returns @instance FormGroup.
   */
   private getForm():FormGroup{
    return this.formBuider.group({
      email       : [this.data.email, Validators.required],
      firstname   : [this.data.firstname, Validators.required],
      lastname    : [this.data.lastname, Validators.required],
      phonenumber : [this.data.phonenumber, Validators.required],
      country     : [this.data.country, Validators.required],
      state       : [this.data.state, Validators.required],
      city        : [this.data.city, Validators.required],
      gender      : [this.data.gender, Validators.required],
    })
  }

  /**
   * @description fetch state, city data.
   * @param request user's request.
   */
   fetchLocationName(request:string){
    if(request === 'state'){
      this.countryName = this.updateUser.get("country")?.value;
      this.requestToDb.goGet(_urls.FETCH_STATE_END_POINT,this.countryName.id).subscribe(data=>{
        this.stateList = data;
        this.updateUser.get('country')?.setValue(this.countryName.name);
      });
    }else if(request === 'city'){
      this.stateName = this.updateUser.get("state")?.value;
      this.requestToDb.goGet(_urls.FETCH_CITY_END_POINT,this.stateName.id).subscribe(data=>{
        this.cityList = data;
        this.updateUser.get('state')?.setValue(this.stateName.name);
      });
    }else if(request === 'citystore'){
        this.cityName = this.updateUser.get("city")?.value;
        this.updateUser.get('city')?.setValue(this.cityName.name);
    }
  }

  /**
   * @description update user details. 
   */
   updateUserDetails(){
    console.table(this.countryName);
   let info = {
       city        : this.updateUser.get('city')?.value,
       country     : this.updateUser.get('country')?.value,
       state       : this.updateUser.get('state')?.value,
       email       : this.updateUser.get('email')?.value,
       firstName   : this.updateUser.get('firstname')?.value,
       lastName    : this.updateUser.get('lastname')?.value,
       gender      : this.updateUser.get('gender')?.value,
       number      : this.updateUser.get('phonenumber')?.value,
       fileName    : this.data.filename,
   };
   console.log(info);
   this.requestToDb.goPut(_urls.UPDATE_USER,info,this.sessionProvider.fetchJwtSession()).subscribe((response:any)=>{
     this.closeDialog();
   });
 }

  /**
   * @description close dialogbox
   */
  closeDialog():void{
    this.dialogRef.close();
  }

}
