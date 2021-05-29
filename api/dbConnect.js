const mysql = require('mysql');

'user strict';

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Mayafit23!',
    database : 'test'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;