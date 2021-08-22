import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorMsgService {
  private readonly INTERNET_DOWN = "No internet connection.";
  private readonly SERVER_DOWN = "Server not responding.";
  private readonly INTERNAL_SERVER_ERROR = "Internal Server Error.";

  constructor() { }

  public getErrorMessage(code : number){
    let message = '';
    console.log(code);
    if(code==0){
      message = this.INTERNET_DOWN;
    }
    return message;
  }
}
