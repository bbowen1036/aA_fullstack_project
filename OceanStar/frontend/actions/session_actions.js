import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = (currentUser) => {
  return ({
    type: RECEIVE_CURRENT_USER,
    currentUser
  })
};

export const logoutCurrentUser = () => {
  return ({
      type: LOGOUT_CURRENT_USER
  })
}; 

// errors is an Array
export const receiveErrors = (errors) => {
  return ({
      type: RECEIVE_ERRORS,
      errors 
  })
};

export const createNewUser = (newUser) => dispatch => {
  return (
      APIUtil.signup(newUser)
          .then(user => dispatch(createNewUser(user)))
          .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
  )
};

export const logoutUser = () => dispatch => {
  return (
      APIUtil.logout().then(loggedOutUser => dispatch(logoutUser()))
  )
};

export const loginUser = (user) => dispatch => {
  return (
      APIUtil.login(user)
          .then(signedUpUser => dispatch(loginUser(signedUpUser)))
          .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
  )
};
