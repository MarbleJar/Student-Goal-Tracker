import * as types from '../constants/actionTypes';

//isLoggedIn
  //1 - log in page
  //2 - sign up page
  //3 - actual marble jar page

  //if isLoggedIn is ever true, go to marble page
  //if isLoggedIn and signingUp are false, stay at login page
  //if signingUp is true, go to signUp

const initialUser =  {isLoggedIn: false, signingUp: false, userId: null, firstName: null, username: '', password:  '', errorMessage: ''};
// const initialUser =  {isLoggedIn: true, userId: null, firstName: 'Michael', username: '', password:  '', errorMessage: ''};

const signUpUserData = {signUpFirstName: '', signUpLastName: '', signUpUsername: '', signUpPassword:  ''}

//add an action that turns signingUp to true and bring to sign up page
//add an action to handle typing in sign-up boxes
//add an action that processes clicking sign up and letting user into marble jar page

// Comment out - this is where the tasks are currently coming from
// const sampleGoalsData = [{description: "Read 3 books", due_date: '2021-02-15', status: 'Pending', _id: 'abcd'},
//  {description: "No talking during class", due_date: '2021-02-15', status: 'Pending', _id: 'abcd'},
//  {description: "Clean up after lunch", due_date: '2021-02-15', status: 'Pending', _id: 'abcd'},
//  {description: "Read 3 books", due_date: '2021-02-15', status: 'Pending', _id: 'abcd'},
//  {description: "Read 3 books", due_date: '2021-02-15', status: 'Pending', _id: 'abcd'},
// ]

const initialState = {
  loginData: initialUser,
  signUpUserData: signUpUserData,
  goalsData: [],
  classStatus: {totalPending: 0, totalComplete: 0}, 
  studentStatus: {totalPending: 0, totalComplete: 0}
}


const reducer = (state = initialState, action) => {
  console.log("reducer invoked");
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
      // loginData.errorMessage = action.payload.errorMessage;

      return { 
        ...state,
        loginData
      };
    }
    // case types.LOGGED_OUT: {
    //   let loginData = {...initialUser};
    //   return {
    //     ...state,
    //     loginData
    //   };
    // }
    case types.UPDATE_GOAL: {

      // let goalsData = [...state.goalsData];
      let goalsData = action.payload.response;
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
    case types.DELETE_GOAL: {
      let goalsData = action.payload;
      return {
        ...state, 
        goalsData
      };
    }

    case types.SIGN_UP_FIELD_CHANGE: {
      let signUpUserData = {...state.signUpUserData};
      signUpUserData[action.payload.changedField] = action.payload.newValue;

      return {
        ...state,
        signUpUserData
      };
    }

    case types.TOGGLE_SIGNING_UP: {
      let loginData = {...state.loginData};
      loginData.signingUp = true;

      return {
        ...state,
        loginData
      }
    }


    case types.SIGN_UP_COMPLETE: {
      let loginData = {...state.loginData};
      let signUpData = {...state.signUpUserData}
      signUpData.username = '';
      signUpData.password = '';
      loginData.isLoggedIn = action.payload.isLoggedIn;
      loginData.userId = action.payload.userId;
      loginData.firstName = action.payload.firstName;
      // signupData.lastName = action.payload.lastName;

      // loginData.errorMessage = action.payload.errorMessage;
      return { 
        ...state,
        loginData, 
        signUpData
      };
    }



    default: {
      return state;
    }
}
}

export default reducer;