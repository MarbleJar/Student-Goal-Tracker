// ------ FILE FOR EXPRESS SERVER ------

// Import Express module: 
const express = require('express');
// Assign express methods to "app" variable
const app = express();
// Import the path module:
const path = require('path');
// Import cookieParser for cookies & authentication features:
const cookieParser = require('cookie-parser');
// Import bodyParser:

// Import useControllers:
const { verifyUser, createUser } = require('./controllers/userControllers.js');
const { findStudentGoals } = require('./controllers/goalControllers.js');


// Import mongoose modules:
const mongoose = require('mongoose');
// Connecting to Mongoose through Atlas hosting site: 
const mongooseURI = 'mongodb+srv://marbleJarTeam:ilovemarbles@student-goal-tracker.zh4sx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(mongooseURI, {useNewUrlParser: false}, {useUnifiedTopology: true});
// mongoose.connect(`${mongooseURI}`, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.once('open', () => console.log('Connected to MarbleJar Database'));



//----- PARCERS -----
// Parcer for JSON requests:
app.use(express.json());
// Parcer for cookies:
app.use(cookieParser());
// Parcer for urlencoded requests:
app.use(express.urlencoded()); // Best practice note: body-parser is deprecated for Express version 4.16+, use express.urlencoded() instead



//----- LOGIN ROUTE HANDLER -----
app.post('/api/login', verifyUser,
  (req, res) => {
  // If login is unsuccessful, returns: {isLoggedIn: false, errorMessage}
  if (res.locals.loginError) res.status(401).json(res.locals.loginError);

  // If login is successful, returns: {isLoggedIn: true, userId, firstName}
  res.status(200).json(res.locals.loginResponse);
});
// add: middleware to generate a cookie upon successful login
// add: middleware middleware that gets the correct student information from the database upon successful login
//   would you want to redirect the student to their specific studentgoals view based upon their id?


//----- LOGOUT ROUTE HANDLER -----
app.post('/api/logout', (req, res) => res.status(200).send());
  // some middleware to stop the current session maybe?
  // would this just redirect the user to the login view again?
  

//----- SIGNUP ROUTE HANDLER ----- (used for testing)
app.post('/api/signup',
  createUser,
  (req, res) => res.status(200).json(res.locals.newUser));
  


//----- GET STUDENT GOALS ROUTE HANDLER-----
// http://localhost:3000/api/getStudentGoals?studentId='ID'
app.get('/api/getStudentGoals/:studentId', 
  findStudentGoals,
  (req, res) => {
    res.status(200).json(res.locals.goalsResponse);
  });


//** UPDATE STUDENT INFO */
// http://localhost:3000/api/updateGoal?goalId='ID'
// app.put('/api/updateGoal/:goalId', 
//   // middleware to update student's goals 
//   (req, res) => {
//   res.status(200).json();
// });

//** GET CLASS PROGRESS */
// http://localhost:3000/api/getClassProgress
// app.get('/api/getClassProgress', 
//   // middleware
//   (req, res) => {
//   res.status(200).json();
// });



//----- LANDING PAGE ROUTE HANDLER -----
// should be handeled by front end server
app.get('/', (req, res) => {
  res.render('../client/index.html');
  res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'));
});



//----- GLOBAL ERROR HANDLER -----
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Global error handler identified an error within the middleware',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);  
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`MarbleJar app listening on port ${PORT}!`));