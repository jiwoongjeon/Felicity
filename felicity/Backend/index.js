const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "felicity"
});
db.connect((err) => {
    if (err) throw err;
    console.log("Connected")
});

app.get("/", (req, res) => {
    res.send("Main Route");
})

const port = 3001;
const server = app.listen(port, () => {
    console.log(`Server running on Port ${port}`);
});

