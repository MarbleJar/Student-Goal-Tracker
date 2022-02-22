// Import Express
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const PORT = 3000;

// Connecting to Mongoose through Atlas hosting site
mongoose.connect('mongodb+srv://marbleJarTeam:ilovemarbles@student-goal-tracker.zh4sx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: false}, {useUnifiedTopology: true});

// confirm you are connected to the db
mongoose.connection.once('open', () => {
  console.log('Connected to MarbleJar Database');
})



app.listen(PORT, () => console.log('SERVER UP AND RUNNING'));