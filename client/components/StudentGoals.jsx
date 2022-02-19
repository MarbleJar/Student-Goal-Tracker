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

  
  
  render() {
    //[{description: String, due_date: Date, status: String, _id}, ...]
    // Loop through array and render items
    const displayArray = [];
    console.log(this.props.goalsData);
   
    this.props.goalsData.forEach((element, index) => {
      let thisRow = <tr key={index}>
        <td>{element.description}</td>
        <td>{element.due_date}</td>
        <td>{element.status}</td>
        <td><input type = 'button' onClick = {() => {this.props.markComplete(element._id, index)} }/></td>
      </tr>
      displayArray.push(thisRow);
    })

    

    

    // Return should include the array of table rows
    return(
      <div>Student Goals
        <table>
          <tbody>
            {displayArray}
          </tbody>
        </table>
      </div>
      );
      
  }
}

export default StudentGoals;