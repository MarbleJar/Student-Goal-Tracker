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
  
  const mapDispatchToProps = dispatch => ({
    markComplete: (goalId, goalStatus, studentId, index) => {
        dispatch(actions.markComplete(goalId, goalStatus, studentId, index));
    },
    deleteGoal: (goalId, studentId) => {
        dispatch(actions.deleteGoal(goalId, studentId));
    },
    getGoals: (studentId) => {
        dispatch(actions.getGoals(studentId));
    },
    // addGoal: () => {
    //     dispatch(actions.addGoal());
    // },
  });

class StudentContainer extends Component {

    render() {
        return(
        <div className = 'StudentContainer'>
             <StudentGoals 
                goalsData = {this.props.goalsData} 
                studentStatus = {this.props.studentStatus} 
                markComplete = {this.props.markComplete} 
                getGoals = {() => this.props.getGoals(this.props.loginData.userId)}
                loginData = {this.props.loginData}
                deleteGoal = {this.props.deleteGoal}
                // addGoal = {this.props.addGoal}
            />
            <MarbleJar  
                goalsData = {this.props.goalsData} 
             />
            
        </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentContainer);