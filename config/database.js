// config/database.js

/**
 * 
 * @type {{connection: {host: string, user: string, password: string}, database: string, users_table: string}}
 */
module.exports = {
    'connection': {
        
        'host': 'localhost',
        'user': 'root',
        'password': 'mysql'
    },
    'database': 'clearreview',
    'users_table': 'students'
};