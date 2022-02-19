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
  markComplete: (goalId, index) => actions.markComplete(dispatch, goalId, index)
});

class MainContainer extends Component {

  render() {
    return(<div>Main Container
      <Login loginData = {this.props.loginData} editHandler = {this.props.loginChange} processLogin = {this.props.processLogin} processLogout = {this.props.processLogout}/>
      <StudentGoals goalsData = {this.props.goalsData} studentStatus = {this.props.studentStatus} markComplete = {this.props.markComplete} />
      <MarbleJar classStatus = {this.props.classStatus} />
    </div>);
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);