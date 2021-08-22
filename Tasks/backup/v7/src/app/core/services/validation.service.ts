import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable()
export class ValidationService {

  constructor() { }
  /**
  * @description This function validate password.
  * @return this function will return null if password is right else true if password is wrong.
  * */
  validatePassword(): ValidatorFn{
  return (control:AbstractControl) : ValidationErrors | null => {
      //fetch value
      const value = control.value;
      if(value!=null){
          const hasDigits = new RegExp('[0-9]').test(value);
          const hasCapAlpha = new RegExp('[A-Z]').test(value);
          const hasSmallAlpha = new RegExp('[a-z]').test(value);
          const hasLength = value.length >= 6 && value.length <= 15;
          const checkValidation = hasDigits && hasCapAlpha && hasSmallAlpha && hasLength;
          return !checkValidation? {passwordValidation : true } : null;
      }
      return null;
  }
}



/**
* @description This function used to validate email address.
* @returns This function will return null if email id is right
* else it will return @param emailValidation as true to indicate
* wrong email address.
*/
  validateEmail(): ValidatorFn{
  return (control:AbstractControl) : ValidationErrors | null => {
      //fetch value
      const value = control.value;
      //regular expression for email string
      const emailRegExp = new RegExp('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$');
      //check validation
      const checkValidation = emailRegExp.test(value);
      return !checkValidation? { emailValidation:true }:null;
  }
}



/**
* @description This method validate if user name contains digits or special characters.
* @returns true if it contains digits or special characters.
*/
validateName(): ValidatorFn{
  return(control: AbstractControl) : ValidationErrors | null => {
    //fetch value
    const value = control.value;
    const hasNumber  = new RegExp('[0-9]').test(value);
    return !hasNumber ? null : { nameValidation:true };
  }
}



/**
* @description This method validate phone number.
* @returns true if phone number is wrong else return null.
* */
  validPhoneNumber(){
    return (control:AbstractControl):ValidationErrors | null =>{
      //fetch value
      const value = control.value;
      let checkPhone;
      if(!value){
        return null;
      }
      if(value.toString().length != 10){
       checkPhone = true;
      }
      return !checkPhone ? null : {phoneNumValidation:true};
    }
  }
}
