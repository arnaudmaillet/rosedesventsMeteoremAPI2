'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'newuser',
    password : 'Darkvadormir1',
    database : 'testapi'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;
