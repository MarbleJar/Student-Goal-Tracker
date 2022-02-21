const express = require('express')
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const port = 3000;
const cors = require('cors');
const studentController = require('./controller.js');
// const cookieParser = require('cookie-parser');

// if we end up moduralizing our server then use the links below to require in the relevant router/controller files:

/*
const cookieController = require('');
const sessionController = require('');
*/

// logic to connect mongoose (might want to have a separate mongoose model file for this?)
const mongooseURI = 'mongodb+srv://marbleJarTeam:ilovemarbles@student-goal-tracker.zh4sx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(`${mongooseURI}`, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
  console.log('Connected to Pink Fairy Armadillo\'s database');
});

// **** MIDDLEWARE ********************************
app.use(cors());
// app.use(cookieParser());

// not sure how everyone best wants to serve assets but express.static would be one way to do so
// app.use(express.static(''));

//  built-in middleware function in Express. It parses incoming requests with urlencoded payloads and is based on body-parser.
// app.use(bodyParser.urlencoded({ extended: true }));

//  built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser. the below allows us to get access to request.body from the client
app.use(express.json());


app.get('/', (req, res) => {
  // serve the view we want to see here when we first get to the login page
  // probably serve the login page?
  res.status(200).send('Hello World from server.js!')
});

//** LOGIN ROUTES */
app.post('/api/login', 
  // middleware that gets the correct student information from the database upon successful login
  studentController.getStudent(),
    // would you want to redirect the student to their specific studentgoals view based upon their id?
    // what would the logic for this look like? 
  (req, res) => {
    res.status(200).send(res.locals.user);
  });

app.post('/api/logout',
// some middleware to stop the current session maybe?
// would this just redirect the user to the login view again?
(req, res) => {
  res.status(200).redirect('redirect to the login view');
})

//** GET STUDENT */
// http://localhost:3000/api/getStudentGoals?studentId='ID'
app.get('/api/getStudentGoals/:studentId', 
  // middleware  
  (req, res) => {
  res.status(200).json();
});

//** UPDATE STUDENT INFO */
// http://localhost:3000/api/updateGoal?goalId='ID'
app.put('/api/updateGoal/:goalId', 
  // middleware to update student's goals 
  (req, res) => {
  res.status(200).json();
});

//** GET CLASS PROGRESS */
// http://localhost:3000/api/getClassProgress
app.get('/api/getClassProgress', 
  // middleware
  (req, res) => {
  res.status(200).json();
});

// Global error handler
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

app.listen(port, () => console.log(`MarbleJar app listening on port ${port}!`))