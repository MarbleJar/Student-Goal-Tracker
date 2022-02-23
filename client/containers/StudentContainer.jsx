import React, {Component} from 'react';
import {connect} from 'react-redux';

class StudentContainer extends Component {

    render() {
        <div className = 'StudentContainer'>
            <StudentGoals goalsData = {this.props.goalsData} studentStatus = {this.props.studentStatus} markComplete = {this.props.markComplete} getGoals = {() => this.props.getGoals(this.props.loginData.userId)} />
            <MarbleJar classStatus = {this.props.classStatus} getClassStatus = {this.props.getClassStatus} />
      </div>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentContainer);