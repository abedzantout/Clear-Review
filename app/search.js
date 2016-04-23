var express = require('express');
var router = express.Router();

module.exports = function (app, connection) {
    app.get('/search', function (req, res) {
        connection.query('SELECT entry from entry where entry like "%' + req.query.key + '%"',
            function (err, rows, fields) {
                if (err) throw err;
                var data = [];
                for (i = 0; i < rows.length; i++) {
                    data.push(rows[i].entry);
                }
                res.end(JSON.stringify(data));
                console.log(JSON.stringify(data)) //TODO: to extract info from
            });
    });
    return router;
};
