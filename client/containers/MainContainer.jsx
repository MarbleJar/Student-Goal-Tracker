import React, {Component} from 'react';
import {connect} from 'react-redux';

import Login from '../components/Login.jsx';
import StudentContainer from './StudentContainer.jsx';

import * as actions from '../actions/actions';

const mapStateToProps = state => ({
  loginData: state.loginData,
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
    else {
      return(
      <div className = "MainContainer" > Sign in Below to See Your Goals!
        <Login 
          loginData = {this.props.loginData} 
          loginChange = {this.props.loginChange} 
          processLogin = {this.props.processLogin} 
        />
      </div>)
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);