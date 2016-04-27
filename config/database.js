// config/database.js

/**
 *
 * =========================================================================================================
 *  MODIFY ME
 *  !!!!!!!!
 *  !!!!!!!!
 * =========================================================================================================
 * @type {{connection: {host: string, user: string, password: string}, database: string, users_table: string}}
 */
module.exports = {
    'connection': {
        'host': 'localhost',
        'user': 'root', // to change according to admin computer
        'password': 'mysql' // to change according to admin computer
    },
    'database': 'clearreview',
    'users_table': 'students'
};