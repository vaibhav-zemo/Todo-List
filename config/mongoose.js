const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todolist_db');
const db = mongoose.connection;

db.on('error',console.error.bind(console,'Error while creating database'));
db.once('open',function () {
    console.log("Successfully data base is created");
})