import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions/actions';

import MarbleJar from '../components/MarbleJar.jsx';
import StudentGoals from '../components/StudentGoals.jsx';

const mapStateToProps = state => ({
    loginData: state.loginData,
    goalsData: state.goalsData,
    classStatus: state.classStatus,
    studentStatus: state.studentStatus
  });
  
  //Marble Jar is given class data, presumably so percentage reflects entire class accomplishment
  //
  
  const mapDispatchToProps = dispatch => ({
    markComplete: (goalId, index) => {
        dispatch(actions.markComplete(goalId, index));
    },
    getClassStatus: () => {
        dispatch(actions.getClassStatus());
    },
    getGoals: (studentId) => {
        dispatch(actions.getGoals(studentId));
    },
    processLogout: () => {
        dispatch(actions.processLogout());
    },
  });

    const populatedGoals = () => this.props.getGoals(this.props.loginData.userId)
class StudentContainer extends Component {

    render() {
        console.log("student goals data", this.props.goalsData)
        return(
        <div className = 'StudentContainer'>
            We're logged in!!
             <StudentGoals 
                goalsData = {this.props.goalsData} 
                studentStatus = {this.props.studentStatus} 
                markComplete = {this.props.markComplete} 
                getGoals = {() => this.props.getGoals(this.props.loginData.userId)}
            />
            <MarbleJar  
                classStatus = {this.props.classStatus} 
                getClassStatus = {this.props.getClassStatus}
             />
            
        </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentContainer);