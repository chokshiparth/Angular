import { environment } from "src/environments/environment";

export const _urls = {
    URL                        :   environment.url,
    LOGIN_USER_END_POINT       :   environment.url+environment.loginUrl,
    REGISTER_USER_END_POINT    :   environment.url+environment.registrationUrl,
    FETCH_CITY_END_POINT       :   environment.url+environment.fetchCity,
    FETCH_STATE_END_POINT      :   environment.url+environment.fetchState,
    FETCH_COUNTRY_END_POINT    :   environment.url+environment.fetchCountry,
    DELETE_USER_END_POINT      :   environment.url+environment.deleteUrl,
    CONFIRM_TOKEN              :   environment.url+environment.confirmToken,
    FIND_ALL_USER              :   environment.url+environment.findAll,
    FIND_USER_DATA             :   environment.url+environment.finspecificuser,
    DISPLAY_IMAGE              :   environment.url+environment.displayimage,
    UPDATE_USER                :   environment.url+environment.updateuser,
    VERIFY_EMAIL               :   environment.url+environment.verifyemail,
    FORGOT_PASSWORD_EMAIL      :   environment.url+environment.forgotpasswordemail,
    VERIFY_PASSWORD_EMAIL      :   environment.url+environment.verifypasswordemail,
    UPDATE_PASSWORD            :   environment.url+environment.updatepassword
}