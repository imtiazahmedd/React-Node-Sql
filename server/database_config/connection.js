const mysql = require('mysql');

const connection = mysql.createConnection({
    database: 'testing',
    host: 'localhost',
    user: 'root',
    password: 'root1234'
});

module.exports = connection;