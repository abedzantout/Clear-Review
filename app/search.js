var express = require('express');
var router = express.Router();
var url = require('url');

module.exports = function (app, connection) {


    // app.use(function (req, res, next) {
    // console.log('query: ' + req.query.key);
    // res.send({data:url.parse(req.url, true).query})
    // console.log(req.body.objectData);
    // res.type('json');
    // res.send({ some: JSON.stringify({response:'json'}) });
    // next();
    // });

    app.get('/search', function (req, res) {
        connection.query('SELECT * from students where email like "%' + req.query.key + '%"',
            function (err, rows, fields) {
                if (err) throw err;
                var data = [];
                for (i = 0; i < rows.length; i++) {
                    data.push(rows[i].email);
                }
                res.send(data);
                var queryData = url.parse(req.url, true).query;
                console.log(JSON.stringify(queryData.key));

                // console.log(JSON.stringify(data)) //TODO: to extract info from -- DONE
                // console.log(JSON.stringify(queryData.key));
            });
    });

    return router;
};