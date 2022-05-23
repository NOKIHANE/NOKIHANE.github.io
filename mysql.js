var mysql = require("mysql");

var connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "020118",
        database: "ranking"
});

connection.connect();

connection.query(
    'SELECT * FROM ranking', function(error, results){
        if(error) throw error;
        console.log(results);
    }
);
