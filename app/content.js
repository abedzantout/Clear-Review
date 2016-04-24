var app = require('express');

module.exports = function(app, io) {

    app.get('/profile',function(req, res){
        res.render('profile.ejs');
    });
    io.on('connection', function(socket){
        socket.on('chat message', function(msg){
            io.emit('chat message', msg);
        });
    });
};