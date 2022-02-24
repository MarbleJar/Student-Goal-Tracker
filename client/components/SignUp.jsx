import React,  {Component}  from 'react';
import {connect} from 'react-redux';
import * as types from '../constants/actionTypes.js';
import * as actions from '../actions/actions';
// ^ Lines above needed?

class SignUp extends Component {

    render() {
      
      const { signUpFieldChange, signUpUserData, processSignUp } = this.props; // CHANGE TO NEW STATE DATA/METHODS
      // new state
      //processSignUp is an action creator - triggers interaction with back-end to add a user to DB (also triggers loginData.isLoggedIn to be true)
      //signUpChange is an action creator - alters state but never goes to the back-end
      //signUpData is stored in state and used here to grab all sign up info, but eventually that is transferred to the label 'loginData' in reducer
      console.log("signUpUserData from SignUp page", signUpUserData)
      console.log("props", this.props)
      return(
        <div className = 'signupPage'>
          <h1>Welcome To Marble Jar!</h1>
          <h3>Please enter your details below to create your new account:</h3>
          <form className = 'signUpFirstName'>
            <input 
            className = "username-input" 
            type = 'text' 
            name = 'signUpFirstName' 
            placeholder = 'first name' 
            value={signUpUserData.signUpFirstName} // CHANGE WITH NEW STATE DATA (SIGNUPDATA.FIRSTNAME)
            onChange = {e => {signUpFieldChange(e.target.value, 'signUpFirstName')}} // CHANGE WITH NEW STATE METHOD (SIGNUPCHANGE)
            />
          </form>
          <form className = 'signUpLastName'>
            <input 
            className = "username-input" 
            type = 'text' 
            name = 'lastName' 
            placeholder = 'last name' 
            value={signUpUserData.signUpLastName} // CHANGE WITH NEW STATE DATA (SIGNUPDATA.LASTNAME)
            onChange = {e => {signUpFieldChange(e.target.value, 'signUpLastName')}} // CHANGE WITH NEW STATE METHOD (SIGNUPCHANGE)
            />
          </form>
          <form className = 'signUpUsername'>
            <input 
            className = "username-input" 
            type = 'text' 
            name = 'username' 
            placeholder = 'username' 
            value={signUpUserData.signUpUsername} // CHANGE WITH NEW STATE DATA (SIGNUPDATA.USERNAME)
            onChange = {e => {signUpFieldChange(e.target.value, 'signUpUsername')}} // CHANGE WITH NEW STATE METHOD (SIGNUPCHANGE)
            />
          </form>
          <form className = 'signUpPassword'>
            <input 
            className = "password-input" 
            type = 'password' 
            name = 'password' 
            placeholder = 'password' 
            value={signUpUserData.signUpPassword} // CHANGE WITH NEW STATE DATA (SIGNUPDATA.PASSWORD)
            onChange = {e => {signUpFieldChange(e.target.value, 'signUpPassword')}} // CHANGE WITH NEW STATE METHOD (SIGNUPCHANGE)
            />
          </form>
          <button className = 'submit'
            className = "submit-button" 
            type="button"
            //need to both use our server to sign up a new user in our database
            //and then ALSO utilize the login functionality to sign a user right in... or redirect to login page
            onClick = {() => {processSignUp(signUpUserData.signUpUsername, signUpUserData.signUpPassword, signUpUserData.signUpFirstName, signUpUserData.signUpLastName)}} // CHANGE PROCESSLOGIN TO NEW STATE METHOD PROCESSSIGNUP, AND USE 4 KVPS OF SIGNUPDATA AS INPUTS
          >Create Account</button>
        </div>
        );      
    }
  }
  
  export default SignUp;