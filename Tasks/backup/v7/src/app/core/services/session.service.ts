import { Injectable } from '@angular/core';
import { SessionInfo } from '../interface/sessionInfo';

@Injectable()
export class SessionService {

  constructor() { }

  /**
   * @description Fetch JWT Session token.
   * @returns JWT token in string format.
   */
   fetchJwtSession() : string | null{
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
   * @description fetch session's user info.
   * @returns void.
   */
  fetchUser() : string | null{
    let user = null;
    if(localStorage.length!=0){
      user = localStorage.key(0);
    }
    return user;
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
