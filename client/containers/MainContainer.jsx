import React, {Component} from 'react';
import {connect} from 'react-redux';

import Login from '../components/Login.jsx';
import MarbleJar from '../components/MarbleJar.jsx';
import StudentGoals from '../components/StudentGoals.jsx';
// import StudentContainer from './StudentContainer.jsx';

import * as actions from '../actions/actions';

// const initialUser =  {isLoggedIn: false, userId: null, firstName: null, username: '', password:  '', errorMessage: ''};

// const initialState = {
//   loginData: initialUser,
//   goalsData: [],
//   classStatus: {totalPending: 0, totalComplete: 0}, 
//   studentStatus: {totalPending: 0, totalComplete: 0}
// }

const mapStateToProps = state => ({
  loginData: state.loginData,
  goalsData: state.goalsData,
  classStatus: state.classStatus,
  studentStatus: state.studentStatus
});

//Marble Jar is given class data, presumably so percentage reflects entire class accomplishment
//

const mapDispatchToProps = dispatch => ({
  loginChange: (value, field) => dispatch(actions.editFieldActionCreator(value, field)),
  processLogin: (username, password) => actions.processLogin(dispatch, username, password),
  processLogout: () => actions.processLogout(dispatch),
  markComplete: (goalId, index) => actions.markComplete(dispatch, goalId, index),
  getClassStatus: () => actions.getClassStatus(dispatch),
  getGoals: (studentId) => actions.getGoals(dispatch, studentId)
});

//conditionally render Student Goals and MarbleJar if logged in
class MainContainer extends Component {


  render() {
    //console.log(this.props);
    

    let output;
    if (this.props.loginData.isLoggedIn) {
      output = 
      // // do we need to wrap this in divs? tbd! we don't know!
        // <div>
        //   <StudentContainer />
        // </div>
      output = <div>
        <StudentGoals goalsData = {this.props.goalsData} studentStatus = {this.props.studentStatus} markComplete = {this.props.markComplete} getGoals = {() => this.props.getGoals(this.props.loginData.userId)} />
        <MarbleJar classStatus = {this.props.classStatus} getClassStatus = {this.props.getClassStatus} />
       </div>
    }
    
    //Login is rendered every time... the contents of login change depending on login status
    //output is also rendered every time, but we only see things on the page if there is something there
    return(<div className = "MainContainer">Sign in Below to See Your Goals!
      <Login loginData = {this.props.loginData} editHandler = {this.props.loginChange} processLogin = {this.props.processLogin} processLogout = {this.props.processLogout}/>
      {output}
    </div>)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);