require("dotenv").config({
    path: require("path").resolve(__dirname, "../../.env")
});
let mysql = require('mysql2');
const fs = require("fs");
const path = require("path");

let db = mysql.createConnection({

    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
     ssl: {
        ca: fs.readFileSync(path.join(__dirname, "../../isrgrootx1.pem"))
    }
});


db.connect(function(err) {
    if (err) throw err;
    console.log("Connected to TiDB");
});

module.exports = db;
