import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions/actions';

// const initialUser =  {isLoggedIn: false, userId: null, firstName: null, username: '', password:  '', errorMessage: ''};

// const initialState = {
//   loginData: initialUser,
//   goalsData: [],
//   classStatus: {totalPending: 0, totalComplete: 0}, 
//   studentStatus: {totalPending: 0, totalComplete: 0}
// }

class MarbleJar extends Component {
  
  componentDidMount() {
    // this.props.getClassStatus();

  }

  render() {
    // console.log(this.props.classStatus);
    // let percent = (this.props.classStatus.totalComplete / (this.props.classStatus.totalComplete + this.props.classStatus.totalPending))*100;
    let percent = 50;

    const divStyle = {
      height: percent+'%',
      
    };

    return(

      <div className = 'title'>Class Status
      <div className = "graph-header">
        Marble Jar
        <div className = "graph-outer">
          <div className = "graph-bar" style = {divStyle}>
            <div className = "graph-label">{Math.round(percent).toString()}%</div>
        </div>
      </div>

      </div>
      </div>
    
       
      );      
  }
}

export default MarbleJar;