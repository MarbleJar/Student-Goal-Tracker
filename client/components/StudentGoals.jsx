import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions/actions';

class StudentGoals extends Component {

  componentDidMount() {
    this.props.getGoals();
  }

  render() {
    const displayArray = [];

    this.props.goalsData.forEach((element, index) => {
      let thisRow = <tr key={index} className = "TableRow">
                      <td>{element.title}</td>
                      <td>{element.description}</td>
                      <td>{element.dueDate}</td>
                      <td>{`${element.status}`}</td>
                      <td>
                        <input 
                          className = "CheckBox" 
                          type = 'checkbox' 
                          onClick = {() => {
                            this.props.markComplete(element._id, element.status, this.props.loginData.userId, index)
                          } }
                        />
                      </td>
                      <td>
                        <button onClick={() => this.props.deleteGoal(element._id, this.props.loginData.userId)}>X</button>
                      </td>
                    </tr>
      displayArray.push(thisRow)
    })

    // Return should include the array of table rows
    return(
      <div> <h3 className = 'title'>Student Goals</h3>
        <table className = "GoalTable">
          <tbody>
            {displayArray}
          </tbody>
        </table>
      </div>
      )
      
  }
}

export default StudentGoals;