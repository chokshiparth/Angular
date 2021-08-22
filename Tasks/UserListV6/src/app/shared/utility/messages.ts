/**
 * @description provide loader messages.
 */
export const _messages = {
    singinMessage           :   'Signing In...',
    signupMessage           :   'Singing Up..',
    verifyingEmailMessage   :   'Verifying Email Address...',
    loadingData             :   'Loading data...'
}

/**
 *  @description provide error messages.
 */
export const _errorMessages = [
    { status  : 404 , message  : 'Not able to find resource :(' },
    { status  : 410 , message  : 'Serve is busy :(' },
    { status  : 400 , message  : 'Could not able to send data :(' },
    { status  : 500 , message  : 'Could not able to established connection :(' },
    { status  : 401 , message  : 'Username or Password is incorrect :('},
    { status  : 429 , message  : 'Server is busy :('}
]