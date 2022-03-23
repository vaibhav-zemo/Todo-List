const express = require('express');
const port = 8000
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));


const mongoose = require('./config/mongoose');
const to_do_list = require('./models/list');

app.get('/', function (req, res) {
    to_do_list.find({}, function (err, list) {
        if (err) {
            console.log("Error while finding list");
            return;
        }
        return res.render('home', {
            title: 'To Do List',
            to_do_list:list
        });
    });
});

app.post('/create-list', function (req, res) {
    console.log(req.body.date);
    to_do_list.create({
        description: req.body.des,
        date: req.body.date,
        category: req.body.input_list
    }, function (err, newlist) {
        if (err) {
            console.log('Error while creating list');
            return;
        }
        return res.redirect('back');
    })
})

app.get('/delete-list/',function (req,res) {
    var id = req.query.id;
    to_do_list.findByIdAndDelete(id,function (err) {
        if (err) {
            console.log("Error while Deleting");
            return;
        }
        return res.redirect('back');
    })
})

app.listen(port, function (err) {
    if (err) {
        console.log("Error while creating server");
        return;
    }
    console.log("Server is running at port: ", port);
})