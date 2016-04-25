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

    app.get('/home',function(req, res){
        res.render('home.ejs');
    });

};