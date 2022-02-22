import * as types from '../constants/actionTypes';

const initialUser =  {isLoggedIn: false, userId: null, firstName: null, username: '', password:  '', errorMessage: ''};
// const initialUser =  {isLoggedIn: true, userId: null, firstName: 'Michael', username: '', password:  '', errorMessage: ''};

// Comment out 
const sampleGoalsData = [{description: "Read 3 books", due_date: '2021-02-15', status: 'Pending', _id: 'abcd'},
 {description: "No talking during class", due_date: '2021-02-15', status: 'Pending', _id: 'abcd'},
 {description: "Clean up after lunch", due_date: '2021-02-15', status: 'Pending', _id: 'abcd'},
 {description: "Read 3 books", due_date: '2021-02-15', status: 'Pending', _id: 'abcd'},
 {description: "Read 3 books", due_date: '2021-02-15', status: 'Pending', _id: 'abcd'},
]


const initialState = {
  loginData: initialUser,
  goalsData: sampleGoalsData,
  classStatus: {totalPending: 0, totalComplete: 0}, 
  studentStatus: {totalPending: 0, totalComplete: 0}
}

const reducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case types.LOGIN_FIELD_CHANGE: {
      let loginData = {...state.loginData};
      loginData[action.payload.changedField] = action.payload.newValue;
      
      return {
        ...state,
        loginData
      };
    }


    case types.LOGGED_IN: {
      let loginData = {...state.loginData};
      loginData.username = '';
      loginData.password = '';
      loginData.isLoggedIn = action.payload.isLoggedIn;
      loginData.userId = action.payload.userId;
      loginData.firstName = action.payload.firstName;
      loginData.errorMessage = action.payload.errorMessage;

      return { 
        ...state,
        loginData
      };
    }
    case types.LOGGED_OUT: {
      let loginData = {...initialUser};
      return {
        ...state,
        loginData
      };
    }
    case types.UPDATE_GOAL: {

      let goalsData = [...state.goalsData];
      goalsData[action.payload.index] = action.payload.response;

      return {
        ...state,
        goalsData
      };
    }
    case types.GET_GOALS: {
      let goalsData = [...state.goalsData];
      goalsData = action.payload;
      return {
        ...state, 
        goalsData
      };
    }
    case types.GET_CLASS: {
      let classStatus = {...state.classStatus};
      classStatus.totalPending = action.payload.response.totalPending;
      classStatus.totalComplete = action.payload.response.totalComplete;

      return {
        ...state,
        classStatus
      };
    }

    default: {
      return state;
    }
}
}

export default reducer;