import React,  {Component}  from 'react';
import {connect} from 'react-redux';
import * as types from '../constants/actionTypes.js';
import * as actions from '../actions/actions';

async function onClickHandler (username, password) {
  const bodyData = {username: enteredUsername, password: enteredPassword}
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bodyData)
    };

    // console.log(bodyData)
     
    // TO TEST WITH SERVER: Un-comment these two lines
    const serverResponse = await fetch('/api/login', requestOptions);
    let results = await serverResponse.json();
    console.log(results)
    // Testing use only
    // serverRespon
    processLogin(results)
  }

class Login extends Component {

  render() {
 
    const { loginChange, loginData, processLogin } = this.props;

    return(
      <div className = 'loginPage'>
        <h1>Welcome Back!</h1>
        <h3>We are glad you are back! Please enter your details.</h3>
        <form className = 'username'>
          <input 
          className = "username-input" 
          type = 'text' 
          name = 'username' 
          placeholder = 'username' 
          value={loginData.username} 
          onChange = {e => {loginChange(e.target.value, 'username')}}
          />
        </form>
        <form className = 'password'>
          <input 
          className = "password-input" 
          type = 'password' 
          name = 'password' 
          placeholder = 'password' 
          value={loginData.password} 
          onChange = {e => {loginChange(e.target.value, 'password')}}
          />
        </form>
        <button className = 'submit'
          className = "submit-button" 
          type="button"
          onClick = {() => {processLogin(loginData.username, loginData.password)}}
        >Submit</button>
      </div>
      );      
  }
}

export default Login;