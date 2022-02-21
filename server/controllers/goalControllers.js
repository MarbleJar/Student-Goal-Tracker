
const { Goal } = require('../models/studentModels');

const goalController = {};

goalController.findStudentGoals = (req, res, next) => {
  const { studentId } = req.parama;

  Goal.find({ studentId }, (err, result) => {
    if (err) {
      return next({
        log: err.message,
        status: 400,
        message: { err: 'Global error handler identified an error within the middleware'},
      });
    }
    console.log('result from goalController.findStudentGoals: ', result)
    res.locals.goalsResponse = {
      // description: result.data, 
      // due_date: result.data, 
      // status: String, _id,
    }
  });
}

module.exports = goalController;