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
      let thisRow = <tr key={index} className = "TableContainer">
                      <section className = "TableRow">
                      <td><b>Goal:</b> {element.title}</td>
                      <td><b>Description:</b>  {element.description}</td>
                      <td><b>Due Date:</b>  {element.dueDate}</td>
                      <td><b>Completion Status:</b> {`${element.status}`}</td>
                      </section>
                      <section className = "TableRow2">
                        <input 
                          className = "CheckBox" 
                          type = 'checkbox' 
                          onClick = {() => {
                            this.props.markComplete(element._id, element.status, this.props.loginData.userId, index)
                          } }
                        />
                        <td>
                          <button onClick={() => this.props.deleteGoal(element._id, this.props.loginData.userId)}>X</button>
                        </td>
                      </section>
                    </tr>
      displayArray.push(thisRow)
    })

    // Return should include the array of table rows
    return(
      <div> 
        <h3 className = 'goal-title'>Student Goals</h3>
        <table className = "GoalTable">
          <tbody className="table-body">
            {displayArray}
          </tbody>
        </table>
      </div>
      )
      
  }
}

export default StudentGoals;