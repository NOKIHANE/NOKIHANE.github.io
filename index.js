var mysql = require("mysql");
var express = require('express');
var bodyParser=require("body-parser");
var app = express();
var connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "020118",
        database: "ranking"
});

app.use("/static",express.static("public"));
app.set("view engine", 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));

app.get('/', function (req, res) {
    connection.query(
        'SELECT * FROM ranking ORDER BY score ASC LIMIT 10;',
        function (error, results) {
            if (error) throw error;
            res.render("rankform",{ranking: results});
        }
    );
});

app.post("/addname",function(req,res){
    let name=req.body.name;
    let score=parseFloat(req.body.score);

    connection.query(
        'INSERT INTO ranking (name,score) VALUES (?,?)',
        [name,score],//score待填入左侧
        function(error,results){
            if (error) throw error;
            res.redirect("/");//重定向至根目录
        }
    );
})

app.listen(3000);


