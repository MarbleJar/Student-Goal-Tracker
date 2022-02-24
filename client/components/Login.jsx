import React,  {Component}  from 'react';
import {connect} from 'react-redux';
import * as types from '../constants/actionTypes.js';
import * as actions from '../actions/actions';

class Login extends Component {

  render() {
 
    const { loginChange, loginData, processLogin, toggleSigningUp } = this.props;

    const onSubmit = (e) => {
      e.preventDefault();
      processLogin(loginData.username, loginData.password)
    };

    return(
      <div className = 'loginPage'>
        <h1>Welcome Back!</h1>
        <h2>Sign in Below to See Your Goals! </h2>
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
        <form className = 'password' onSubmit={onSubmit}>
          <input 
          className = "password-input" 
          type = 'password' 
          name = 'password' 
          placeholder = 'password' 
          value={loginData.password} 
          onChange = {e => {loginChange(e.target.value, 'password')}}
          // onKeyPress = {handleKeyPress}
          />
        </form>

          <button className = 'submit'
            className = "submit-button" 
            type="submit"
            onClick = {() => {processLogin(loginData.username, loginData.password)}}
          >Submit</button>

          <button className = 'submit'
            className = "submit-button"
            type="submit"
            onClick = {() => {toggleSigningUp()}}
          >Sign Up</button>

      </div>
      );      
  }
}

export default Login;