let mysql = require('mysql2');

let db = mysql.createConnection({
    host: "gateway01.ap-southeast-1.prod.aws.tidbcloud.com",
    user: "pvmsQbVLXrdXaws.root",
    password: "wNZPcG2S06FzHN2o",
    database: "joshua_portfolio",
    port: 4000
})

db.connect(function(err) {
    if (err) throw err;
    console.log("Connected to the database");
});

module.exports = db;
