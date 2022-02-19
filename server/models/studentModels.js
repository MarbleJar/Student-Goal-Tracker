const mongoose = require('mongoose');

// create a constructor 
const Schema = mongoose.Schema;

// create a student schema
const studentSchema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  userName: {type: String, required: true, unique: true},
  password: {type: String, required: true},
});

// create a collection instance of the model
const Student = mongoose.model('students', studentSchema);


// create a goal schema
const goalsSchema = new Schema({
  description: {type: String, required: true}, 
  dueDate: Number,
  //behaves like a foreign key referencing the 'students' collection
  status: {
    type: Schema.Types.ObjectId,
    ref: 'students'
  }
});

// create a collection instance of the model 
const Goal = mongoose.model('goals', goalsSchema);


module.exports = {Student, Goal};
