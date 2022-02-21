// import the models object
// access models via models.Student || models.Goal
const Student = require('./models/studentModels');

const studentController = {};

// this will display all students
studentController.getAllStudents = next => {
  Student.find({}, next);
}

studentController.getStudent = (req, res, next) => {

  console.log('request body in studentController.getStudent is: ', req.body);

  // object destructuring for cleaner code; using the property name in req.body to create variable names representing what the value of that property name is
  const { username, password } = req.body;


  // setting up what our student object should look like; if the key and value are the same then we can simply write the key/value and JS will recognize firstName to just be firstName: firstName;
  const student = { 
    userName, 
    password 
  }

  Student.findOne(student, (err, user) => {

    if (err) {
      return next({isLoggedIn: false, errorMessage: 'incorrect username and/or password entered'});
    }
  
    console.log('what is user in findOne query: ', user);
    res.locals.user = {
      isLoggedIn: true, 
      userId: 'database ID for that student', 
      firstName: 'value from database',
    }
    return next();
  })
}

module.exports = studentController;