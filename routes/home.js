var app = require('express');
var router = app.Router();
var url = require('url');
module.exports = function(app, connection, io) {
    connection.query('SELECT title from course',  function (err, rows, fields) {
        if (err) throw err;
        var data = [];
        for (var i = 0; i < rows.length; i++) {
            data.push(rows[i].title);
        }
        console.log(data);
        io.on('connection', function (socket) {
            socket.emit('courses', {
                data: data
            });
        });
    });


    connection.query('SELECT FIRST_NAME, SURNAME from Teacher',  function (err, rows, fields) {
        if (err) throw err;
        var FIRST_NAME = [];
        var SURNAME = [];
        for (var i = 0; i < rows.length; i++) {
            FIRST_NAME.push(rows[i].FIRST_NAME);
            SURNAME.push(rows[i].SURNAME);
        }
        console.log(FIRST_NAME, SURNAME);
        io.on('connection', function (socket) {
            socket.emit('professors', {
                FIRST_NAME: FIRST_NAME,
                SURNAME: SURNAME
            });
        });
    });





    app.get('/home',function(req, res){
        res.render('home.ejs');

        io.on('clientMessage', function (data, from) {
            io.emit('serverMessage', 'Got a message!');
            console.log('I received a message by ', from);
        });

    });

};