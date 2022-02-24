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

class StudentGoals extends Component {

  componentDidMount() {
    this.props.getGoals();
  }

  render() {
    //[{description: String, due_date: Date, status: String, _id}, ...]
    // Loop through array and render items
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
                            //console.log('student data:', this.props.loginData.userId);
                            this.props.markComplete(element._id, element.status, this.props.loginData.userId, index)
                          } }
                        />
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