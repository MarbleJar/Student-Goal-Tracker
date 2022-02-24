import React,  {Component}  from 'react';
import {connect} from 'react-redux';
import * as types from '../constants/actionTypes.js';
import * as actions from '../actions/actions';

class Login extends Component {

  render() {
 
    const { loginChange, loginData, processLogin } = this.props;

    const onSubmit = (e) => {
      e.preventDefault();
      processLogin(loginData.username, loginData.password)
    };

    return(
      <div className = 'loginPage'>
        <h1 className = 'loginh1'>MarbleJar</h1>
        <h3 className = 'loginh3'>Welcome Back! Please enter your details.</h3>
        <h4 className = 'loginh4'>Sign in Below to See Your Goals!</h4>
        <form className = 'username'>
          <h5 className = "loginh5">Username</h5>
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
          <h5 className = "loginh5">Password</h5>
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
      </div>
      );      
  }
}

export default Login;