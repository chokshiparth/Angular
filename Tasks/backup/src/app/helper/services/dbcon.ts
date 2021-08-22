import { _urls } from 'src/app/shared/utility/connection-url';
/**
 * This class holds all information related to URL.
 * It will genrate URL based on user request.
 */
export class DatabaseUrlInfo{
    /**
     * This method will return user's required URL based on user's action.
     * @param requestedAction is user's required action.
     * @returns according to user's actions provides URL for specific end point.
     */
    public getUrl(requestedAction:string){
        let toSendUrl = '';
        switch(requestedAction){
            case 'login':
                    toSendUrl = _urls.LOGIN_USER_END_POINT;
                break;
            case 'register':
                    toSendUrl = _urls.REGISTER_USER_END_POINT;
                break;
            case 'country':
                    toSendUrl = _urls.FETCH_COUNTRY_END_POINT;
                break;
            case 'state':
                    toSendUrl = _urls.FETCH_STATE_END_POINT;
                break;
            case 'city':
                    toSendUrl = _urls.FETCH_CITY_END_POINT;
                break;
            case 'delete':
                    toSendUrl = _urls.DELETE_USER_END_POINT;
                break;
            case 'confirm_token':
                    toSendUrl = _urls.CONFIRM_TOKEN;
                break;
          case 'find_all_user':
                    toSendUrl = _urls.FIND_ALL_USER;
                break;
        }
        return toSendUrl;
    }
}
