let mysql = require("mysql");

let connection = mysql.createConnection({
    host:       'localhost',
    user:       'root',
    password:   '',
    database:   'notes_db_api'
});

connection.connect(function(error) {
    if (!!error) {
        console.log(error);
    } else {
        console.log("Connection successful!");
    }
});

module.exports = connection;