import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions/actions';


class MarbleJar extends Component {

  render() {
    
    let counter = 0;
    for (let i = 0; i < this.props.goalsData.length; i++){
      if (this.props.goalsData[i].status) counter++;
    }


    let percent = (counter / this.props.goalsData.length) * 100;

    const divStyle = {
      height: percent+'%',
      
    };

    return(

      <div className = 'title'>
      <h4 className="jar-title">Marble Jar</h4>
      <div className = "graph-header">
        <h4 className="jar-status">Class Status</h4>
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