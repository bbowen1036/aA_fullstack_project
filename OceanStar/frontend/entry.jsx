import React from 'react';
import ReactDOM from "react-dom";
import configureStore from './store/store'

//test//
import {login, logout, signup} from './util/session_api_util'
import {createNewUser, loginUser, logoutUser} from './actions/session_actions'


document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  const root = document.getElementById("root");
  ReactDOM.render(<h1>Welcome to OceanStar</h1>, root);


  //test//

  let user1 = { username: 'Brian',
  password: 'password',
  email: 'user1@aa.io'}

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  
  window.login(user1)

 
  window.createNewUser = createNewUser;
  window.loginUser = loginUser;
  window.logoutUser = logoutUser;
});