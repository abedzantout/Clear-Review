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
    app.get('/ceia', function(req, res){
        res.render('ceia.ejs');
    });
}
