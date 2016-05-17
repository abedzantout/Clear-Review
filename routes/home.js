var app = require('express');
var router = app.Router();
var url = require('url');
var session = require('express-session');
/**
 *
 * @param app
 * @param connection
 * @param io
 * @param user
 * @return router and middleware responsible for page rendering of content in database in real time
 */
module.exports = function (app, connection, io, passport) {
    connection.query('SELECT title from course', function (err, rows, fields) {
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
    // connection.query('INSERT INTO ENROLL VALUES(?,?)', function(err, rows, fields) {
    //    if(err) throw err;
    //     var data = [];
    //     console.log(data);
    //     io('connection', function(socket){
    //         socket.emit('QandA', {
    //             //TODO: to modify
    //             data: data
    //         })
    //     })
    // });
    connection.query('SELECT FIRST_NAME, SURNAME from Teacher', function (err, rows, fields) {
        if (err) throw err;
        var FIRST_NAME = [];
        var SURNAME = [];
        for (var i = 0; i < rows.length; i++) {
            FIRST_NAME.push(rows[i].FIRST_NAME);
            SURNAME.push(rows[i].SURNAME);
        }
        console.log(FIRST_NAME, SURNAME);
        io.on('connection', function (socket) {
            socket.emit('professors', {
                FIRST_NAME: FIRST_NAME,
                SURNAME: SURNAME
            });
        });

        for (var i = 0; i < rows.length; i++) {
            add(connection, rows[i].FIRST_NAME, rows[i].SURNAME, io);
        }
    });


    io.on('connection', function (socket) {
        socket.on('checkcrn', function (msg) {
            console.log("message " + msg);
            checkCRN(connection, msg, socket)
        });
    });

    function checkCRN(connection, CRN, socket) {
        connection.query({
                sql: 'SELECT CRN, TITLE, NUMBER, CREDIT_NUM, SUBJECT FROM COURSE c JOIN COURSEINSTANCE ci ON (c.courseID = ci.courseID) WHERE CRN = ?',
                values: CRN
            },
            function (err, rows, fields) {
                if (err) throw err;
                if (rows.length < 1) {
                    //this is where i want to emit the message
                    socket.emit('checkcrn', "error")
                    //emitMessage('Course does not exist')
                }
                else if (rows.length > 0) {
                    socket.emit('checkcrn', rows[0].CRN);
                    checkStudentIfEnrolloed(connection, rows[0].CRN);
                }
            });
    }

    function checkStudentIfEnrolloed(connection, CRN) {
        var query = "SELECT CRN FROM ENROLL WHERE CRN = ? AND STUDENTID = 2"
        connection.query({
            sql: query,
            values: CRN
        }, function (err, rows, fields) {
            if (err) throw err;
            if (rows.length < 1) {
                addCourse(connection, CRN);
            }
            else {
                console.log(rows[0].CRN)
                console.log('YOU CANT ADD A COURSE')
            }
        })
    }

    function addCourse(connection, CRN) {
        var query = "INSERT INTO ENROLL VALUES(?, 2)"
        connection.query({
            sql: query,
            values: [CRN]
        }, function (err, rows, fields) {
            if (err) throw err;
            console.log(rows);
        });
    }


    function add(connection, FIRST_NAME, SURNAME, io) {
        var queryCoursesTaughtBy = "SELECT COURSE.COURSEID,COURSE.TITLE,COURSE.NUMBER,COURSE.CREDIT_NUM FROM COURSE,COURSEINSTANCE,TEACHER WHERE TEACHER.FIRST_NAME = ? AND TEACHER.SURNAME = ? AND TEACHER.TEACHERID = COURSEINSTANCE.TEACHERID AND COURSEINSTANCE.COURSEID = COURSE.COURSEID"
        connection.query({
            sql: queryCoursesTaughtBy,
            values: [FIRST_NAME, SURNAME]
        }, function (err, rows, fields) {
            if (err) throw err;

            var TITLE = [];
            var COURSEID = [];
            var NUMBER = [];
            var CREDIT_NUM = [];
            for (var i = 0; i < rows.length; i++) {
                TITLE.push(rows[i].TITLE);
                COURSEID.push(rows[i].COURSEID);
                NUMBER.push(rows[i].NUMBER);
                CREDIT_NUM.push(rows[i].CREDIT_NUM);
            }
            console.log(TITLE + ' ' + COURSEID)
            io.on('connection', function (socket) {
                socket.emit('professorProfile', {
                    TITLE: TITLE,
                    COURSEID: COURSEID,
                    NUMBER: NUMBER,
                    CREDIT_NUM: CREDIT_NUM
                });
            });
        });
    }


    connection.query('SELECT NUMBER, TITLE, SUBJECT, CREDIT_NUM FROM COURSE', function (err, rows, fields) {
        if (err) throw err;
        var NUMBER = [];
        var TITLE = [];
        var SUBJECT = [];
        var CREDIT_NUM = []
        for (var i = 0; i < rows.length; i++) {
            NUMBER.push(rows[i].NUMBER);
            TITLE.push(rows[i].TITLE);
            SUBJECT.push(rows[i].SUBJECT);
            CREDIT_NUM.push(rows[i].CREDIT_NUM)
        }
        console.log(NUMBER, TITLE, SUBJECT);

        io.on('connection', function (socket) {
            socket.emit('courseDetails', {
                NUMBER: NUMBER,
                TITLE: TITLE,
                SUBJECT: SUBJECT,
                CREDIT_NUM: CREDIT_NUM
            });
        });
    });
};