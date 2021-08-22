/**
 * This service class provides database related services.
 * authentication of user, registration of new user,
 * update user information, delete user, verified user,
 * auto login user etc.
 */
import { Injectable } from '@angular/core';
import { DatabaseUrlInfo } from 'src/app/dbservices/dbcon';
import { HttpClient, HttpErrorResponse, HttpHandler} from '@angular/common/http';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import * as SockJS from 'sockjs-client';
import * as Stomp from '@stomp/stompjs';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class DbServicesService {
  private readonly urlProvider : DatabaseUrlInfo  = new DatabaseUrlInfo();
  private webSocketEndPoint    : string           = environment.url+'notification';
  private topic                : string           = "/user/:username/queue/notification";
  private stompClient          : any;
  private verifiedUserEventObject = new EventEmitter();

  constructor(
    private httpClient: HttpClient, //inject HttpClient Services
    private router : Router         //inject Router Services
  ) { }

  /**
   * Thhis method will retrive data from the backend or database.
   * @param requstedAction | user's action. For e.g, login, register, update etc.
   * @param data | user's additional details.
   */
  public goGetRequest(requstedAction: string,data:string){
    let URL = this.urlProvider.getUrl(requstedAction);
    return this.httpClient.get(URL+data);
  }

  /**
   * This method used to send data to databse.
   * @param requstedAction | user's action. For e.g, login, register, update etc.
   * @param data | user's additional details.
   */
  public goPostRequest(requestedAction:string,data:any){
    let URL = this.urlProvider.getUrl(requestedAction);
    return this.httpClient.post(URL,data);
  }

  //open socket on click of register
  openSocket(email:any){
    console.log(this.webSocketEndPoint);
    this.topic = this.topic.replace(':username',email);
    let ws = new SockJS(this.webSocketEndPoint);
    this.stompClient = Stomp.over(ws);
    const _this = this;
    _this.stompClient.connect({}, function (frame:any) {
    console.log("Connected");
      _this.stompClient.subscribe(_this.topic, function (message:any) {
        _this.verifiedUserEventObject.emit(message.body);
        },(error:any) => {
          console.log(error);
        });
      },(error:any)=>{
          console.log("Connection Error"+error);
      },(error:any)=>{
          console.log("Connection Close"+error);
      })
  }

  //return verifiedUserEventObject
  get getVerifiedUserEventObject(){
    return this.verifiedUserEventObject;
  }
}
