import { environment } from "src/environments/environment";
/**
 * This class holds all information related to URL.
 * It will genrate URL based on user request.
 */
export class DatabaseUrlInfo{
    private readonly URL                        =   environment.url;
    private readonly LOGIN_USER_END_POINT       =   environment.loginUrl;
    private readonly REGISTER_USER_END_POINT    =   environment.registrationUrl;
    private readonly FETCH_CITY_END_POINT       =   environment.fetchCity;
    private readonly FETCH_STATE_END_POINT      =   environment.fetchState;
    private readonly FETCH_COUNTRY_END_POINT    =   environment.fetchCountry;
    private readonly DELETE_USER_END_POINT      =   environment.deleteUrl;
    private readonly CONFIRM_TOKEN              =   environment.confirmToken;
    private readonly FIND_ALL_USER              =   environment.findAll;

    /**
     * This method will return user's required URL based on user's action.
     * @param requestedAction is user's required action.
     * @returns according to user's actions provides URL for specific end point.
     */
    public getUrl(requestedAction:string){
        let toSendUrl = '';
        switch(requestedAction){
            case 'login':
                    toSendUrl += this.URL + this.LOGIN_USER_END_POINT;
                break;
            case 'register':
                    toSendUrl += this.URL + this.REGISTER_USER_END_POINT;
                break;
            case 'country':
                    toSendUrl += this.URL + this.FETCH_COUNTRY_END_POINT;
                break;
            case 'state':
                    toSendUrl += this.URL + this.FETCH_STATE_END_POINT;
                break;
            case 'city':
                    toSendUrl += this.URL + this.FETCH_CITY_END_POINT;
                break;
            case 'delete':
                    toSendUrl += this.URL + this.DELETE_USER_END_POINT;
                break;
            case 'confirm_token':
                    toSendUrl += this.URL + this.CONFIRM_TOKEN;
                break;
          case 'find_all_user':
                    toSendUrl += this.URL + this.FIND_ALL_USER;
                break;
        }
        return toSendUrl;
    }
}
