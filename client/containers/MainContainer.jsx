import React, {Component} from 'react';
import {connect} from 'react-redux';

import Login from '../components/Login.jsx';
import MarbleJar from '../components/MarbleJar.jsx';
import StudentGoals from '../components/StudentGoals.jsx';

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

const mapDispatchToProps = dispatch => ({
  loginChange: (value, field) => dispatch(actions.editFieldActionCreator(value, field)),
  processLogin: (username, password) => actions.processLogin(dispatch, username, password),
  processLogout: () => actions.processLogout(dispatch),
  markComplete: (goalId, index) => actions.markComplete(dispatch, goalId, index),
  getClassStatus: () => actions.getClassStatus(dispatch),
  getGoals: (studentId) => actions.getGoals(dispatch, studentId)
});

class MainContainer extends Component {


  render() {
    console.log(this.props);

    let output;
    if (this.props.loginData.isLoggedIn) {
      console.log("current user...");
      console.log(this.props.loginData);
      output = <>
        <StudentGoals goalsData = {this.props.goalsData} studentStatus = {this.props.studentStatus} markComplete = {this.props.markComplete} getGoals = {() => this.props.getGoals(this.props.loginData.userId)} />
        <MarbleJar classStatus = {this.props.classStatus} getClassStatus = {this.props.getClassStatus} />
      </>
    }

    return(<div className = "MainContainer">Sign in Below to See Your Goals!
      <Login loginData = {this.props.loginData} editHandler = {this.props.loginChange} processLogin = {this.props.processLogin} processLogout = {this.props.processLogout}/>
      {output}
    </div>)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);