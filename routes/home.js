var express = require('express');
var router = express.Router();

module.exports = function (app, passport) {

    router.get('/home', isLoggedIn, function (req, res, next) {
        res.render('home', {
            title: 'Clear Review',
            user: req.user
        });
    });
    return router;
};

function isLoggedIn(req, res, next) {
// if user is logged in - 
    if (req.isAuthenticated())
        return next();
// if they aren't redirect them to home
    res.redirect('/');
}

