// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url                 : 'http://7bc065f5471a.ngrok.io/',
  loginUrl            : 'usermodule/v1/login/',
  registrationUrl     : 'usermodule/v1/signup/',
  updateuser          : 'usermodule/v1/updateuser/',
  deleteUrl           : 'usermodule/v1/deleteuser/permenant/', 
  confirmToken        : 'usermodule/v1/login/confirm/',
  findAll             : 'usermodule/v1/findalluserdetails/',
  setImage            : 'registration/uploadfile/base64',
  fetchCountry        : 'usermodule/v1/country/',
  fetchState          : 'usermodule/v1/state/',
  fetchCity           : 'usermodule/v1/city/',
  checkEmail          : 'usermodule/checkemail/',
  finspecificuser     : 'usermodule/v1/finduser/',
  displayimage        : 'usermodule/v1/displayimage/',
  verifyemail         : 'usermodule/v1/verifyemail/',
  forgotpasswordemail : 'usermodule/v1/forgetpassword/',
  verifypasswordemail : 'usermodule/v1/verifypassword/',
  updatepassword      : 'usermodule/v1/updatepassword/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
