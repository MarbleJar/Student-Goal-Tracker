
const { Goal } = require('../models/studentModels');

const goalController = {};

goalController.findStudentGoals = (req, res, next) => {
  // to get req.params to work we need to invoke bodyParser() in server.js file
  const { studentId } = req.params;
  console.log('req.params is: ', req.params);

  Goal.find({ student: studentId }, (err, result) => {
    if (err) {
      return next({
        log: err.message,
        status: 400,
        message: { err: err.message},
      });
    }
    console.log('result from goalController.findStudentGoals: ', result)
    res.locals.goalsResponse = result;
    return next();
  });
}

module.exports = goalController;