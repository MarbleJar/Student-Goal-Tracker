<<<<<<< HEAD
// ------ FILE FOR EXPRESS SERVER ------

// Import Express module: 
=======
// Import Express
>>>>>>> dev
const express = require('express');
// Assign express methods to "app" variable
const app = express();
// Import the path module:
const path = require('path');
// Import cookieParser for cookies & authentication features:
const cookieParser = require('cookie-parser');
// Import bodyParser:

// Import useControllers:
const {verifyUser} = require('./controllers/userControllers.js')

const PORT = 3000;

<<<<<<< HEAD

// Import mongoose modules:
// const mongoose = require('mongoose');

// if we end up moduralizing our server then use the links below to require in the relevant router/controller files:

// const studentController = require('');
// const cookieController = require('');
// const sessionController = require('');

// logic to connect mongoose (might want to have a separate mongoose model file for this?)
// const mongooseURI = 'insert mongoose uri here';

// mongoose.connect(`${mongooseURI}`, { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.connection.once('open', () => {
//   console.log('Connected to Pink Fairy Armadillo\'s database');
// });



//---- PARCERS ----
// JSON parser for incomming requests:
app.use(express.json());
// Parcer for cookies:
app.use(cookieParser());

// urlencoded parser for incomming requests. Built-in middleware function in Express. It parses requests with urlencoded payloads and is based on body-parser:
// app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.render('../client/index.html');
  res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'))
});


//---- LOGIN ROUTE HANDLER ----
app.post('/api/login',
  // Middleware to verify if user credentials exist in the database
  verifyUser,
  // ADD: middleware to generate a cookie upon successful login
  // ADD: middleware middleware that gets the correct student information from the database upon successful login
  //   would you want to redirect the student to their specific studentgoals view based upon their id?
  //   what would the logic for this look like? 
  (req, res) => {
    res.status(200).send('TEST!')
    // if (res.locals.error) res.
    // res.status(200).send('TEST')
  });

// app.post('/api/logout',
// some middleware to stop the current session maybe?
// would this just redirect the user to the login view again?
// (req, res) => {
//   res.status(200).redirect('redirect to the login view');
// })

//** GET STUDENT */
// http://localhost:3000/api/getStudentGoals?studentId='ID'
// app.get('/api/getStudentGoals/:studentId', 
//   // middleware  
//   (req, res) => {
//   res.status(200).json();
// });

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

// Global error handler
// app.use((err, req, res, next) => {
//   const defaultErr = {
//     log: 'Global error handler identified an error within the middleware',
//     status: 400,
//     message: { err: 'An error occurred' },
//   };
//   const errorObj = Object.assign({}, defaultErr, err);
  
//   console.log(errorObj.log);

//   return res.status(errorObj.status).json(errorObj.message);
// });

app.listen(PORT, () => console.log(`MarbleJar app listening on port ${PORT}!`));
=======
// Connecting to Mongoose through Atlas hosting site
mongoose.connect('mongodb+srv://marbleJarTeam:ilovemarbles@student-goal-tracker.zh4sx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: false}, {useUnifiedTopology: true});

// confirm you are connected to the db
mongoose.connection.once('open', () => {
  console.log('Connected to MarbleJar Database');
})



app.listen(PORT, () => console.log('SERVER UP AND RUNNING'));
>>>>>>> dev
