const mongoose = require('mongoose');
const Schema = mongoose.Schema

const teacherSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    // ADD SCHEMA FOR POINTERS TO STUDENTS ARRAY
    goals: [{type: mongoose.Schema.Types.ObjectId, ref: 'Student'}]
});

const Teacher = mongoose.model('teachers', teacherSchema);

module.exports = {Teacher}
