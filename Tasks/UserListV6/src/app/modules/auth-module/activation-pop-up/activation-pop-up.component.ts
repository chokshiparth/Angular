import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConnectionService } from 'src/app/helper/services/connection.service';
import { SessionService } from 'src/app/helper/services/session.service';
import { _urls } from 'src/app/shared/utility/connection-url';
import { _navigate } from 'src/app/shared/utility/navigation-path';

@Component({
  selector: 'app-activation-pop-up',
  templateUrl: './activation-pop-up.component.html',
  styleUrls: ['./activation-pop-up.component.css']
})
export class ActivationPopUpComponent implements OnInit {
  public static minutes     =   15;
  public static seconds     =   0;
  public value              !:  any;
  private eventObj          !:  any;
  public flag               !:  number;
  
  constructor(
    private activeRoute     : ActivatedRoute,
    private router          : Router,
    private dbProvider      : ConnectionService,
    private sessionProvider : SessionService  
  ) { }

  ngOnInit(): void {
    this.value = this.activeRoute.snapshot.queryParamMap.get('id')?.toString();

    if(!this.value.includes('@')){
      
      alert('toekn');
      this.flag = 2;
      this.dbProvider.goGet(_urls.CONFIRM_TOKEN,this.value).subscribe((response:any)=>{
        if(localStorage.length!=0){
          this.sessionProvider.removeSession();
        }
        
        //create session
        this.sessionProvider.createSession({key:response.email,value:response.jwt});
        this.flag = 3;
        //navigate user to dashboard
        this.router.navigate([_navigate.dashboard]);

      },(error:HttpErrorResponse)=>{
        console.error(error);
      });

    }else{
      this.flag = 1;
      //start watch
      ActivationPopUpComponent.startWatch();
      
      this.eventObj = this.dbProvider.getVerifiedUserEventObject;
      this.eventObj.subscribe((response: any)=>{
        //if websocket respond.
        this.router.navigate([_navigate.login_page]);
      },(error: any)=>{
        console.error(error);
      })
    }
  }

  /**
   * @description start the watch.
   */
  static startWatch(){
    let currentTime = setInterval(() => {
      if (ActivationPopUpComponent.minutes != -1) {
        if (ActivationPopUpComponent.seconds != 0) {
          ActivationPopUpComponent.seconds -= 1;
        } else {
          ActivationPopUpComponent.seconds = 59;
          ActivationPopUpComponent.minutes -= 1;
        }
      } else {
        clearInterval(currentTime);
      }
    }, 1000);
  }

  /**
   * @description return minutes.
   */
  get Minutes() {
    return ActivationPopUpComponent.minutes;
  }

  /**
   * @description return seconds.
   */
  get Seconds() {
    return ActivationPopUpComponent.seconds;
  }

}
