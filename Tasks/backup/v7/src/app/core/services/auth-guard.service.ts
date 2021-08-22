import { Injectable } from '@angular/core';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(
    private sessionProvide : SessionService
  ) { }

  /**
   * @description used to check session token exist or not.
   * @returns returns jwt, if exist else returns null.
   */
  jwtExist(){
    let jwtCheck = false;
    if(this.sessionProvide.fetchJwtSession()!=null){
      jwtCheck = true;
    };
    return jwtCheck;
  }

}
