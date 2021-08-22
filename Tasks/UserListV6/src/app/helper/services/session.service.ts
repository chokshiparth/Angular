import { NullTemplateVisitor } from '@angular/compiler';
import { EventEmitter, Injectable } from '@angular/core';
import { SessionInfo } from '../../shared/utility/members';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  /**
   * @description Fetch JWT Session token.
   * @returns JWT token in string format.
   */
   public fetchJwtSession() : string | null{
    let jwt = null;
    if(localStorage.length!=0){
      let key = localStorage.key(0);
      if(key){
        let token = localStorage.getItem(key)?.toString();
        if(token){
          jwt = token;
        }
      }
    }
    return jwt;
  }
  

  /**
   * @description create session by storing jwt in local storage.
   * @param jwtToken Object of @interface SessionInfo holds information of JWT.
   * @returns void.
   */
  createSession(jwtToken : SessionInfo) : void{
    if(localStorage.length!=0){
      localStorage.clear();
    }
    localStorage.setItem(jwtToken.key,jwtToken.value);
  }


  /**
   * @description remove session by removing jwt from local storage.
   * @returns void.
   */
  removeSession() : void{
    localStorage.clear();
  }

}
