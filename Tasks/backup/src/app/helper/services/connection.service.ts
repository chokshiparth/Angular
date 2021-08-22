/**
 * @description Provides services of connection.
 * Services of GET,POST,UPDATE,DELETE.
 * @alias ConnectionService
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  constructor(private httpClient : HttpClient) { }

  /**
   * @description goGet(string,string) method sends get request.
   * @param requestedAction user's action.
   * @param data to be send with requested action.
   * @returns object of @instance HttpClient.
   */
  public goGet(requestedUrl: string, data : string){
    return this.httpClient.get(requestedUrl+data);
  }



  /**
   * @description goGetHeader(string,string) method sends get request with specified header
   * @param requestedUrl user's action.
   * @param data to be send with requested action.
   * @returns object of @instance HttpClient.
   */
  public goGetHeader(requestedUrl: string, data : string){
    let h = {data};
    return this.httpClient.get(requestedUrl,{headers: h});
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
}
