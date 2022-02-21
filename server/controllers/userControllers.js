// ------ FILE FOR USER CONTROLLERS ------

// Import Student model from models/userModels file:
const { Student} = require('../models/studentModels');

// Create userController object to store controller methods
const userController = {};


//--- VERIFY USER LOGIN CONTROLLER ---
userController.verifyUser = (req, res, next) => {
  // console.log(req.body, req.params)
  // Obtain username and password from request body
  const { username, password } = req.body;

  Student.findOne({ username }, (err, user) => {
    if (err) {
      res.locals.loginError = {
        isLoggedIn: false,
        errorMessage: err.message
      }
    }
    else if (!user) {
      res.locals.loginError = {
        isLoggedIn: false,
        errorMessage: 'User does not exist in the database'
      };
    }
    else if (user.password !== password) {
      res.locals.loginError = {
        isLoggedIn: false,
        errorMessage: 'Invalid username or password'
      };
    }
    else {
      console.log(user)
      res.locals.loginResponse = {
        isLoggedIn: true,
        userId: user._id,
        firstName: user.firstName
      }
    }
    return next();
  })
};


//---- CREATE NEW USER CONTROLLER ----
userController.createUser = (req, res, next) => {
  const newUser = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    password: req.body.password
  }

  Student.create(newUser, (err, newUserEntry) => {
    console.log(err)
    if (err) return next({ message: { err: err.message } });
    
    res.locals.newUser = {
      firtName: newUserEntry.firstName,
      lastName: newUserEntry.lastName,
      username: newUserEntry.username,
      password: newUserEntry.password
    };
    return next()
  })
}


//---- GET STUDENT GOALS CONTROLLER -----



module.exports = userController;
