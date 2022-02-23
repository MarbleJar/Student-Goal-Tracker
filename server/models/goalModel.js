const mongoose = require('mongoose');
const Schema = mongoose.Schema

const goalsSchema = new Schema({
    title: {type: String, required: true},
    description: String,
    dueDate: String,
    status: {type: Boolean, required: true},
    //behaves like a foreign key referencing the 'students' collection
    studentID: {
      type: Schema.Types.ObjectId,
      ref: 'Student'
    }
});

const Goal = mongoose.model('goals', goalsSchema);

module.exports = {Goal}