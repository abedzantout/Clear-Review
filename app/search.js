var express = require('express');
var router  = express.Router();
//var url     = require('url');

module.exports = function (app, connection) {
    app.get('/search', function (req, res) {
        connection.query('SELECT * from students where email like "%' + req.query.key + '%"',
            function (err, rows, fields) {
                if (err) throw err;
                var data = [];
                for (i = 0; i < rows.length; i++) {
                    data.push(rows[i].email);
                }
                res.end(JSON.stringify(data));
                //console.log(JSON.stringify(data)) //TODO: to extract info from -- DONE
                //var queryData = url.parse(req.url, true).query;
                //console.log(JSON.stringify(queryData.key));
            });
    });
    return router;
};