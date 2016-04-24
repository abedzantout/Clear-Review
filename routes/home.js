var express = require('express');
var router = express.Router();
var url = require('url');
var passport = require('passport');


module.exports = function (app) {
    require('../app/cr-auth-routes')(app, passport);
    app.get('/home', function (req, res, next) {
        var queryData = url.parse(req.url, true).query;
        console.log('im in');

    });
    return router;
};