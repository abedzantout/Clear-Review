var mysql = require('mysql');
var dbconfig = require('../config/database');

var connection = mysql.createConnection(dbconfig.connection);

connection.query('CREATE DATABASE ' + dbconfig.database);

connection.query('\
CREATE TABLE `' + dbconfig.database + '`.`' + dbconfig.users_table + '` ( \
    `id` int(10) unsigned NOT NULL AUTO_INCREMENT \
    `email` varchar(20) NOT NULL,\
    `password` char(60) NOT NULL, \
        PRIMARY KEY (`id`), \
    UNIQUE INDEX `id_UNIQUE` (`id` ASC), \
    UNIQUE INDEX `email_UNIQUE` (`email` ASC) \
)');

console.log('Success: Database Created!')

connection.end();
