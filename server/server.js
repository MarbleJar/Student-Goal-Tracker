const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const { verifyUser, createUser } = require('./controllers/userControllers.js');
const { findStudentGoals, addGoals, switchStatus, deleteGoal } = require('./controllers/goalControllers.js');

// CHANGE URL BELOW!!
const mongooseURI = 'mongodb+srv://rfbeier:Radar1598@cluster0.spq6q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(mongooseURI, {useNewUrlParser: false}, {useUnifiedTopology: true});
mongoose.connection.once('open', () => console.log('Connected to MarbleJar Database'));
// mongoose.connect(`${mongooseURI}`, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(cookieParser());
// app.use(bodyParser());
// app.use(express.urlencoded()); // Best practice note: body-parser is deprecated for Express version 4.16+, use express.urlencoded() instead


//----- LOGIN ROUTE HANDLER -----
app.post('/api/login', verifyUser, // ADD COOKIE MIDDLEWARE
  (req, res) => {
  // If login is unsuccessful, returns: {isLoggedIn: false, errorMessage}
  if (res.locals.loginError) res.status(401).json(res.locals.loginError);
  // If login is successful, returns: {isLoggedIn: true, userId, firstName}
  res.status(200).json(res.locals.loginResponse);
  // HOW DOES THIS REDIRECT TO NEXT PAGE WITH THEIR LIST & JAR?
});

//----- LOGOUT ROUTE HANDLER -----
app.post('/api/logout', (req, res) => {
  // REDIRECT HERE FOR .GET WITH '/' ?
  res.status(200).send()
});
  

//----- SIGNUP ROUTE HANDLER ----- 
app.post('/api/signup', createUser, (req, res) => {
  // HANDLE ERRORS THAT CAN HAPPEN HERE
  console.log("res locals.newUser:");
  console.log(res.locals.newUser);
  res.status(200).json(res.locals.newUser)
});
  

//----- GET STUDENT GOALS ROUTE HANDLER-----
// http://localhost:3000/api/getStudentGoals?studentId='ID'
app.get('/api/getStudentGoals/:studentID', 
  findStudentGoals,
  (req, res) => {
    res.status(200).json(res.locals.goalsResponse);
  });

//-------ADD GOAL TO DB AND RETURN UPDATED------
app.post('/api/newGoal/:studentID', addGoals, findStudentGoals, (req, res) => {
  res.status(200).json(res.locals.goalsResponse);
})

//--------CHANGE THE STATUS OF A GOAL BETWEEN COMPLETED OR INCOMPLETE------
//currently using 2 pieces of middleware to handle, but can be reduced to one if saved in state on front end
app.put('/api/switchStatus/:studentID', switchStatus, findStudentGoals, (req, res) => {
  res.status(200).json(res.locals.goalsResponse);
})


app.delete('/api/deleteGoal/:studentID', deleteGoal, findStudentGoals, (req, res) => {
  res.status(200).json(res.locals.goalsResponse);
})

// //** UPDATE STUDENT INFO */
// // http://localhost:3000/api/updateGoal?goalId='ID'
// app.put('/api/updateGoal/:goalId', 
//   // middleware to update student's goals 
//   (req, res) => {
//   res.status(200).json();
// });

// //** GET CLASS PROGRESS */
// // http://localhost:3000/api/getClassProgress
// app.get('/api/getClassProgress', 
//   // middleware
//   (req, res) => {
//   res.status(200).json("hello");
// });


//----- LANDING PAGE ROUTE HANDLER -----
// should be handled by front end server
app.get('/', (req, res) => {
  res.render('../client/index.html');
  res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'));
});


//----- GLOBAL ERROR HANDLER -----
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Global error handler identified an error within the middleware',
    status: 400,
    message: { err: 'An error occurred from middleware' },
  };
  const errorObj = Object.assign({}, defaultErr, err);  
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`MarbleJar app listening on port ${PORT}!`));