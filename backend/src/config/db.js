let mysql = require('mysql2');

let db = mysql.createConnection({
    host: "gateway01.ap-southeast-1.prod.aws.tidbcloud.com",
    user: "root",
    password: "1234",
    database: "joshua_portfolio",
    port: 3307
})

db.connect(function(err) {
    if (err) throw err;
    console.log("Connected to the database");
});

module.exports = db;
