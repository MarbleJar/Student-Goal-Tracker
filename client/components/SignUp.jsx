import React,  {Component}  from 'react';
// import * as types from '../constants/actionTypes.js';
// import * as actions from '../actions/actions';
// ^ Lines above needed?

class SignUp extends Component {

    render() {
   
      const { loginChange, loginData, processLogin } = this.props; // CHANGE TO NEW STATE DATA/METHODS
      // new state
      //processSignUp is an action creator - triggers interaction with back-end to add a user to DB (also triggers loginData.isLoggedIn to be true)
      //signUpChange is an action creator - alters state but never goes to the back-end
      //signUpData is stored in state and used here to grab all sign up info, but eventually that is transferred to the label 'loginData' in reducer

      return(
        <div className = 'signupPage'>
          <h1>Welcome To Marble Jar!</h1>
          <h3>Please enter your details below to create your new account:</h3>
          <form className = 'signUpFirstName'>
            <input 
            className = "username-input" 
            type = 'text' 
            name = 'firstName' 
            placeholder = 'first name' 
            value={loginData.username} // CHANGE WITH NEW STATE DATA (SIGNUPDATA.FIRSTNAME)
            onChange = {e => {loginChange(e.target.value, 'firstName')}} // CHANGE WITH NEW STATE METHOD (SIGNUPCHANGE)
            />
          </form>
          <form className = 'signUpLastName'>
            <input 
            className = "username-input" 
            type = 'text' 
            name = 'lastName' 
            placeholder = 'last name' 
            value={loginData.username} // CHANGE WITH NEW STATE DATA (SIGNUPDATA.LASTNAME)
            onChange = {e => {loginChange(e.target.value, 'lastName')}} // CHANGE WITH NEW STATE METHOD (SIGNUPCHANGE)
            />
          </form>
          <form className = 'username'>
            <input 
            className = "username-input" 
            type = 'text' 
            name = 'username' 
            placeholder = 'username' 
            value={loginData.username} // CHANGE WITH NEW STATE DATA (SIGNUPDATA.USERNAME)
            onChange = {e => {loginChange(e.target.value, 'username')}} // CHANGE WITH NEW STATE METHOD (SIGNUPCHANGE)
            />
          </form>
          <form className = 'password'>
            <input 
            className = "password-input" 
            type = 'password' 
            name = 'password' 
            placeholder = 'password' 
            value={loginData.password} // CHANGE WITH NEW STATE DATA (SIGNUPDATA.PASSWORD)
            onChange = {e => {loginChange(e.target.value, 'password')}} // CHANGE WITH NEW STATE METHOD (SIGNUPCHANGE)
            />
          </form>
          <button className = 'submit'
            className = "submit-button" 
            type="button"
            //need to both use our server to sign up a new user in our database
            //and then ALSO utilize the login functionality to sign a user right in... or redirect to login page
            onClick = {() => {processLogin(loginData.username, loginData.password)}} // CHANGE PROCESSLOGIN TO NEW STATE METHOD PROCESSSIGNUP, AND USE 4 KVPS OF SIGNUPDATA AS INPUTS
          >Submit</button>
        </div>
        );      
    }
  }
  
  export default SignUp;