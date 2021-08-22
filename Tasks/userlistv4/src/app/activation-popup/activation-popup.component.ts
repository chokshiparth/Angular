/**
 * @author Parth Chokshi.
 * This component use to display message of activation link to user.
 * It also holds timer of 15 minutes used as expiry time.
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router'
import { DbServicesService } from '../dbservices/db-services.service';
import {ErrorMsgService} from "../errors/error-msg.service";

 @Component({
   selector: 'app-activation-popup',
   templateUrl: './activation-popup.component.html',
   styleUrls: ['./activation-popup.component.css']
 })
 export class ActivationPopupComponent implements OnInit {
   public static minutes = 15;
   public static seconds = 0;
   public value !: any;
   private eventObj !: any;
   public flag !: number;
   constructor(private activeRoute: ActivatedRoute,
               private dbProvider : DbServicesService,
               private router : Router,
               private errorMsgProvider : ErrorMsgService) { }

   ngOnInit(): void {
    this.value = this.activeRoute.snapshot.queryParamMap.get('id')?.toString();

    if(!this.value.includes('@')){
      this.flag = 2;
      this.dbProvider.goGetRequest('confirm_token',this.value).subscribe(response=>{
        if(localStorage.length!=0){
          localStorage.clear();
        }
        //@ts-ignore
        localStorage.setItem(response.email,response.jwt);
        this.flag = 3;
      },error=>{
        console.error(error);
      });
    }else{
      this.flag = 1;
      //start watch
      ActivationPopupComponent.startWatch();
      this.eventObj = this.dbProvider.getVerifiedUserEventObject;
      this.eventObj.subscribe((response: any)=>{
        if(localStorage.length==0){
         let session = response.split(" ");
         localStorage.setItem(session[0],session[1]);
        }
        this.router.navigate(['/dashboard']);
      },(error: any)=>{
        console.error(error);
      })
    }
   }

   //start the watch
   static startWatch(){
     let currentTime = setInterval(() => {
       if (ActivationPopupComponent.minutes != -1) {
         if (ActivationPopupComponent.seconds != 0) {
           ActivationPopupComponent.seconds -= 1;
         } else {
           ActivationPopupComponent.seconds = 59;
           ActivationPopupComponent.minutes -= 1;
         }
       } else {
         clearInterval(currentTime);
       }
     }, 1000);
   }

   //return minutes
   get Minutes() {
     return ActivationPopupComponent.minutes;
   }

   //return seconds
   get Seconds() {
     return ActivationPopupComponent.seconds;
   }
 }
