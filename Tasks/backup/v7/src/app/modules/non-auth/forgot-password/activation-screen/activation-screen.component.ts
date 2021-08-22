import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { _navigate } from 'src/app/core/interface/navigate';
import { _urls } from 'src/app/core/interface/url';
import { ConnectionService } from 'src/app/core/services/connection.service';
import { SessionService } from 'src/app/core/services/session.service';
import { ActivationpopupComponent } from '../../activationpopup/activationpopup.component';

@Component({
  selector: 'app-activation-screen',
  templateUrl: './activation-screen.component.html',
  styleUrls: ['./activation-screen.component.css']
})
export class ActivationScreenComponent implements OnInit {
  public static minutes = 15;
  public static seconds = 0;
  public value              !: any;
  private eventObj          !: any;
  public flag               !: number;

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private dbProvider: ConnectionService,
    private sessionProvider: SessionService
  ) { }

  ngOnInit(): void {
    this.value = this.activeRoute.snapshot.queryParamMap.get('id')?.toString();

    if (!this.value.includes('@')) {
      this.flag = 2;
      this.dbProvider.goGet(_urls.VERIFY_PASSWORD_EMAIL, this.value).subscribe((response: any) => {
        this.flag = 3;
        console.log(response);
        //navigate user to dashboard
        this.router.navigate([_navigate.resetpassword],{});

      }, (error: HttpErrorResponse) => {
        console.error(error);
      });

    } else {
      this.flag = 1;
      //start watch
      ActivationpopupComponent.startWatch();

      this.eventObj = this.dbProvider.getVerifiedUserEventObject;
      this.eventObj.subscribe((response: any) => {
        //if websocket respond.
        this.router.navigate([_navigate.login_page]);
      }, (error: any) => {
        console.error(error);
      })
    }
  }


  /**
 * @description start the watch.
 */
  static startWatch() {
    let currentTime = setInterval(() => {
      if (ActivationpopupComponent.minutes != -1) {
        if (ActivationpopupComponent.seconds != 0) {
          ActivationpopupComponent.seconds -= 1;
        } else {
          ActivationpopupComponent.seconds = 59;
          ActivationpopupComponent.minutes -= 1;
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
    return ActivationpopupComponent.minutes;
  }

  /**
   * @description return seconds.
   */
  get Seconds() {
    return ActivationpopupComponent.seconds;
  }

}
