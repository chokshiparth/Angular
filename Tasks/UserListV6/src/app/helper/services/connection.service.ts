/**
 * @description Provides services of connection.
 * Services of GET,POST,UPDATE,DELETE.
 * @alias ConnectionService
 */
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Stomp } from '@stomp/stompjs';
import { _urls } from 'src/app/shared/utility/connection-url';
import * as SockJS from 'sockjs-client';
import { _navigate } from 'src/app/shared/utility/navigation-path';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  private webSocketEndPoint    : string           = _urls.URL+'notification';
  private topic                : string           = "/user/:username/queue/notification";
  private stompClient          : any;
  private verifiedUserEventObject = new EventEmitter();

  constructor(
    private httpClient : HttpClient
  ) { }


  /**
   * @description goGet(string,string) method sends get request.
   * @param requestedAction user's action.
   * @param data to be send with requested action.
   * @param header specify header if any.
   * @returns object of @instance HttpClient.
   */
  public goGet(requestedUrl: string, data : string, header : any = false){
    if(header){
      return this.httpClient.get(requestedUrl+data,{headers:header});
    }else{
      return this.httpClient.get(requestedUrl+data);
    }  
  }


  /**
   * @description goPost(string,string) method sends post request.
   * @param requestedUrl user's actions.
   * @param data to be send with requested action.
   * @returns object of @instance HttpClient.
   */
  public goPost(requestedUrl: string, data : any){
    return this.httpClient.post(requestedUrl,data);
  }


  /**
   * @description goDeleteHeader(string,string) method used to delete data. Header must be specified.
   * @param requestedUrl user's actions.
   * @param data to be send with requested action.
   * @returns object of @instance HttpClient.
   */
  public goDeleteHeader(requestedUrl:string, data:any,headerValue:any){
    return this.httpClient.delete(requestedUrl+data,{headers:headerValue});
  }


  /**
   * @description used to update user details.
   * @param requestedUrl user's action.
   * @param data user's information.
   * @param header jwt token.
   * @returns @instance of HttpClient.
   */
  public goPut(requestedUrl: string, data : any, header : any){
    console.table("In put: "+data);
    return this.httpClient.put(requestedUrl,data,{headers:header});
  }



  /**
   * @description used to open socket.
   * @param email provide email address to subscribe channel.
   */
  openSocket(email:any){
    console.log(this.webSocketEndPoint);
    this.topic = this.topic.replace(':username',email);
    let ws = new SockJS(this.webSocketEndPoint);
    this.stompClient = Stomp.over(ws);
    const _this = this;
    _this.stompClient.connect({}, function (frame:any) {
      _this.stompClient.subscribe(_this.topic, function (message:any) {
        _this.verifiedUserEventObject.emit();
        },(error:any) => {
          console.log(error);
        });
      },(error:any)=>{
          console.log("Connection Error"+error);
      },(error:any)=>{
          console.log("Connection Close"+error);
      })
  }


  /**
   * @return return object of verification event.
   */
  get getVerifiedUserEventObject(){
    return this.verifiedUserEventObject;
  }

}
