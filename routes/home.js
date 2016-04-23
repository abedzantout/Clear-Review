var express = require('express');
var router = express.Router();

/* GET welcome page. */
router.get('/home', function(req, res, next) {
    res.render('home', { title: 'Clear Review' });
});

module.exports = router;