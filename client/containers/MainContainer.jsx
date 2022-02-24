import React, {Component} from 'react';
import {connect} from 'react-redux';

import Login from '../components/Login.jsx';
import StudentContainer from './StudentContainer.jsx';
import SignUp from '../components/SignUp.jsx';

import * as actions from '../actions/actions';

const mapStateToProps = state => ({
  loginData: state.loginData,
  signUpUserData: state.signUpUserData
});

//Marble Jar is given class data, presumably so percentage reflects entire class accomplishment
//

const mapDispatchToProps = dispatch => ({
  loginChange: (value, field) => {
    dispatch(actions.loginChange(value, field));
  },
  processLogin: (username, password) => {
    dispatch(actions.processLogin(username, password));
  },
  toggleSigningUp: () => {
    dispatch(actions.toggleSigningUp());
  },
  processSignUp: (enteredUsername, enteredPassword, enteredFirstName, enteredLastName) => {
    dispatch(actions.processSignUp(enteredUsername, enteredPassword, enteredFirstName, enteredLastName));
  },
  signUpFieldChange: (value, field) => {
    dispatch(actions.signUpFieldChange(value, field));
  }
});

//conditionally render Student Goals and MarbleJar if logged in
class MainContainer extends Component {
   //if isLoggedIn is ever true, go to marble page
  //if isLoggedIn and signingUp are false, stay at login page
  //if signingUp is true, go to signUp
  render() {
    if (this.props.loginData.isLoggedIn) {
      return (
        <div>
          <StudentContainer />
        </div>
      )
    }
    else if (this.props.loginData.signingUp === false){
      return(
      <div className = "MainContainer" > 
        <Login 
          loginData = {this.props.loginData} 
          loginChange = {this.props.loginChange} 
          processLogin = {this.props.processLogin} 
          toggleSigningUp = {this.props.toggleSigningUp}
        />
      </div>)
    }
    else {
      return (
        <div className = "signUpPage" > 
          <SignUp 
            signUpUserData = {this.props.signUpUserData} 
            signUpFieldChange = {this.props.signUpFieldChange} 
            processSignUp = {this.props.processSignUp} 
          />
      </div>
      )
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);