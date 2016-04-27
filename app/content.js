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
module.exports = function(app, connection, io) {
    
/*connection.query('SELECT email from students',  function (err, rows, fields) {
        if (err) throw err;
        var data = [];
        for (i = 0; i < rows.length; i++) {
            data.push(rows[i].email);
        }
        io.on('connection', function (socket) {
            socket.emit('courses', {
                data: data
            });
        });
    });*/
    
    /**
     * callback function on get request of profile
     * @callback module~requestCallback
     * @param {http}req
     * @param {http} res
     */

};