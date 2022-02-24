import * as types from '../constants/actionTypes';
import regeneratorRuntime from "regenerator-runtime";

export const loginChange = (value, field) => ({
  type: types.LOGIN_FIELD_CHANGE,
  payload: {newValue: value, changedField: field},
});

export const processLogin = (enteredUsername, enteredPassword) => (dispatch) => {

  let bodyData = {username: enteredUsername, password: enteredPassword}
  let requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bodyData)
  };

  //console.log(bodyData)

  fetch('/api/login', requestOptions)
      .then(results => results.json())
      .then(results => dispatch({type: types.LOGGED_IN, payload: results}))
      .catch(e => console.log("error in processLogin", e));
}

// export const processLogout = () => (dispatch) => {
//   const requestOptions = {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//   };

//   fetch('/api/logout', requestOptions)
//   .then(results => results.json())
//   .then(data => dispatch({
//     type: types.LOGGED_OUT,
//     payload: null
//   }));
// }

// PATCH /api/updateGoal/:goalId
// {newStatus: String}
// Expected response: {description: String, due_date: Date, status: String, _id} 

export const markComplete = (goalId, goalStatus, studentId, index) => (dispatch) => {
  
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({status : goalStatus , _id : goalId}),
  };

  fetch(`/api/switchStatus/${studentId}`, requestOptions)
  .then(results => results.json())
  .then(results => dispatch({
    type: types.UPDATE_GOAL,
    payload: {response: results, index: index}
  }))
  .catch(e => console.log('error in markComplete: ', e));
  // // Fake server reponse for testing
  // let serverResponse = {description: "Clean up after lunch", due_date: '2021-02-15', status: 'Complete', _id: 'abcd'};
}

export const getClassStatus = () => (dispatch) => {
  
  fetch('/api/getClassProgress/')
  .then(response => response.json())
  .then(data => dispatch({
    type: types.GET_CLASS,
    payload: {response: data}
  }));
  

  // Fake server reponse for testing
  // let serverResponse = {totalPending: 50, totalComplete: 100};

}

export const getGoals = (studentId) => (dispatch) => {

  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };

  fetch('/api/getStudentGoals/' + studentId)
  .then(response => response.json())
  .then(data => dispatch({
    type: types.GET_GOALS,
    payload: data
  }))
  .catch(e => console.log("error in getGoals", e));
}
