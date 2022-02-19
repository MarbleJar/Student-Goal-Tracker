// ------ FILE FOR USER CONTROLLERS ------

// Import Student model from models/userModels file:
const { User } = require('./userModels');
// Import Teacher model from models/userModels file:

// Create userController object to store controller methods
const userController = {};


//--- Veerify user login credentials---
userController.verifyUser = (req, res, next) => {
  // Obtain username and password from request body
  const { name, password } = req.params;

  User.findOne({name})
  next();
};

module.exports = userController;
