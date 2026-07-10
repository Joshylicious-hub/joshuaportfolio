let mysql = require('mysql2');
const fs = require("fs");
const path = require("path");

let db = mysql.createConnection({
    host: "gateway01.ap-southeast-1.prod.aws.tidbcloud.com",
    user: "pvmsQbVLXrdXaws.root",
    password: "wNZPcG2S06FzHN2o",
    database: "joshua_portfolio",
    port: 4000,
    ssl: {
        ca: fs.readFileSync(path.join(__dirname, "../../isrgrootx1.pem"))
    }
})

db.connect(function(err) {
    if (err) throw err;
    console.log("Connected to the database");
});

module.exports = db;
