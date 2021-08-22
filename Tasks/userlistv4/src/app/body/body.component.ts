import { Component, OnInit } from '@angular/core';
import { DbServicesService } from "../dbservices/db-services.service";
import { ErrorMsgService } from "../errors/error-msg.service";
import { UserinfoprovideService } from "../userinfo/userinfoprovide.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})

/**
 * BodyComponent use to display all user's information.
 * */
export class BodyComponent implements OnInit {
  public userData : any[] = []; //user's all information
  eventObj !: any;
  public userName !: string | null;
  constructor(
    private dbServiceProvider : DbServicesService,
    private errorMsgService : ErrorMsgService,
    private userInfoProvider : UserinfoprovideService,
    private router : Router
  ) { }
  ngOnInit(): void {
    this.userName = this.userInfoProvider.getUserName();
    if(this.userName!=null){
      this.dbServiceProvider.goGetRequest('find_all_user','').subscribe((data:any)=>{
        this.userData = data;
      },error=>{
        this.errorMsgService.getErrorMessage(error.status);
      });
    }else{
      this.router.navigate(['/login']);
    }
  }

  //log out user
  logoutUser(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
