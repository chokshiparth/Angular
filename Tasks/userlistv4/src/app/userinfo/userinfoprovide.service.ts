import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserinfoprovideService {
  private userName !: string | null;
  constructor() { }

  //get user name
  getUserName(){
    if(localStorage.length==1){
      this.userName = localStorage.key(0);
    }else{
      this.userName = null;
    }
    return this.userName;
  }
}
