var app = require('express');
var router = app.Router();
var url = require('url');


/**
 *
 *
 * this is for testing purposes only, it is not meant for deployment.
 * expose this function to our app using module.exports
 * @param app
 * @param connection
 * @param io
 */

module.exports = function (app, connection, io) {
    connection.query('SELECT question FROM QUESTION', function (err, rows, fields) {
        if (err) throw err;
        var data = [];
        for (var i = 0; i < rows.length; i++) {
            data.push(rows[i].question)
        }
        io.on('connection', function (socket) {
            socket.emit('questions', {
                data: data
            })
        });
    });


    app.get('/ceia', function (req, res) {
        res.render('ceia.ejs');
    });
}