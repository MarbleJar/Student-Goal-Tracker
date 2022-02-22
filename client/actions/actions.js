import * as types from '../constants/actionTypes';
import regeneratorRuntime from "regenerator-runtime";

export const editFieldActionCreator = (value, field) => ({
  type: types.LOGIN_FIELD_CHANGE,
  payload: {newValue: value, changedField: field},
});

export const processLogin = async (dispatch, enteredUsername, enteredPassword) => {

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: {username: enteredUsername, password: enteredPassword}
    };
  
    let serverResponse
    
    // TO TEST WITH SERVER: Un-comment these two lines
    // serverResponse = await fetch('/api/login', requestOptions);
    // serverResponse = await serverResponse.json();

    // Testing use only
    serverResponse  = {isLoggedIn: true, userId: 'test', firstName: 'John'}

    dispatch({
      type: types.LOGGED_IN,
      payload: serverResponse
    });
}

export const processLogout = async (dispatch) => {

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  };

  // TO TEST WITH SERVER: Un-comment these two lines
  // serverResponse = await fetch('/api/logout', requestOptions);
  // serverResponse = await serverResponse.json();



  dispatch({
    type: types.LOGGED_OUT,
    payload: null
  });
}

//PATCH /api/updateGoal/:goalId
// {newStatus: String}
// Expected response: {description: String, due_date: Date, status: String, _id} 

export const markComplete = async (dispatch, goalId, index) => {

  const requestOptions = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: {newStatus : 'Complete'}
  };

  // TO TEST WITH SERVER: Un-comment these two lines
  // const path = '/api/updateGoal/' + goalId
  // let serverResponse = await fetch(path, requestOptions);
  // serverResponse = await serverResponse.json();
  

  // Fake server reponse for testing
  let serverResponse = {description: "Clean up after lunch", due_date: '2021-02-15', status: 'Complete', _id: 'abcd'};

  // Pull updated class status to update state
  getClassStatus(dispatch);

  dispatch({
    type: types.UPDATE_GOAL,
    payload: {response: serverResponse, index: index}
  });

}

export const getClassStatus = async (dispatch) => {
  
  // TO TEST WITH SERVER: Un-comment these two lines
  // const path = '/api/getClassProgress/'
  // let serverResponse = await fetch(path);
  // serverResponse = await serverResponse.json();
  

  // Fake server reponse for testing
  let serverResponse = {totalPending: 50, totalComplete: 100};

  dispatch({
    type: types.GET_CLASS,
    payload: {response: serverResponse}
  });

}
