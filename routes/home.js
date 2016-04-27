var app = require('express');
var router = app.Router();
var url = require('url');

/**
 *
 * @param app
 * @param connection
 * @param io
 * @return router and middleware responsible for page rendering of content in database in real time
 */
module.exports = function (app, connection, io) {
    connection.query('SELECT title from course', function (err, rows, fields) {
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

    connection.query('SELECT FIRST_NAME, SURNAME from Teacher', function (err, rows, fields) {
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

        io.on('connection', function (socket) {
            socket.on('clientMessage', function (msg) {
                console.log(msg);
            });
        });

    });

    connection.query('SELECT NUMBER, TITLE, SUBJECT, CREDIT_NUM FROM COURSE', function (err, rows, fields) {
        if (err) throw err;
        var NUMBER = [];
        var TITLE = [];
        var SUBJECT = [];
        var CREDIT_NUM = []
        for (var i = 0; i < rows.length; i++) {
            NUMBER.push(rows[i].NUMBER);
            TITLE.push(rows[i].TITLE);
            SUBJECT.push(rows[i].SUBJECT);
            CREDIT_NUM.push(rows[i].CREDIT_NUM)
        }
        console.log(NUMBER, TITLE, SUBJECT);

        io.on('connection', function (socket) {
            socket.emit('courseDetails', {
                NUMBER: NUMBER,
                TITLE: TITLE,
                SUBJECT: SUBJECT,
                CREDIT_NUM: CREDIT_NUM
            });
        });
    });

    app.get('/home', function (req, res) {
        res.render('home.ejs');
    });

};