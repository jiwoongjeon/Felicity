const mysql = require("mysql2");
const pw = require('./pw.js');

var config = module.exports;

config.db = mysql.createConnection({
    user: "admin",
    host: "database-1.cwpvsesnohv2.us-east-2.rds.amazonaws.com",
    password: `${pw}`,
    database: "felicitytest"
});
config.db.connect((err) => {
    if (err) throw err;
    console.log("Connected");
});

config.express = {
    port: 3001,
};