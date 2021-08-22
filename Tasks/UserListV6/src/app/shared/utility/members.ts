/**
 * @interface to store delete dialog information.
 */
export interface DialogData{
    email : string,
    jwt   : string
}

/**
 * @interface to store JWT Session info.
 */
export interface SessionInfo{
    key   : string,
    value : string
}

/**
 * @interface to store user's information
 */
export interface ViewUserDialogData{
    country     : string,
    state       : string,
    city        : string,
    email       : string,
    firstname   : string,
    lastname    : string,
    gender      : string,
    filename    : string,
    phonenumber : number
}