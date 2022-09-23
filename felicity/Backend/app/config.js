const mysql = require("mysql2");
const pw = require('./pw.js');

var config = module.exports;

config.db = mysql.createPool({
    user: "admin",
    host: "telepdb.cbozhfq3cb5w.us-east-2.rds.amazonaws.com",
    password: `${pw}`,
    database: "felicity",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});
// config.db.connect((err) => {
//     if (err) throw err;
//     console.log("Connected");
// });

config.express = {
    port: 3001,
};