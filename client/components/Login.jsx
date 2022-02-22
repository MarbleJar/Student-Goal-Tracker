import React,  {Component}  from 'react';
import {connect} from 'react-redux';
import * as types from '../constants/actionTypes.js';

import * as actions from '../actions/actions';


class Login extends Component {
  render() {
    let output;
    if (this.props.loginData.isLoggedIn === false) {
        output = <form class = 'signIn'>
                <input class = "username" type = 'text' name = 'username' placeholder = 'username' value={this.props.loginData.username} onChange = {e => {this.props.editHandler(e.target.value, 'username')}}/>
                <input class = "password" type = 'password' name = 'password' placeholder = 'password' value={this.props.loginData.password} onChange = {e => {this.props.editHandler(e.target.value, 'password')}}/>
  
            <input class = "submit" type='button' value = 'submit' onClick = {() => {this.props.processLogin(this.props.loginData.username, this.props.loginData.password)}} />
            {this.props.loginData.errorMessage}
            </form>
    }
    else {
        output = <form class = "log-out" method='POST' action='/api/login'>
            <h3>Hello, {this.props.loginData.firstName}!</h3>
            <input type = 'button' value = 'log out' onClick = {() => {this.props.processLogout()}} />
        </form>
    }
    return(
      <div class = 'login'>
        <br/>
        {output}
      </div>
      );      
  }
}

export default Login;