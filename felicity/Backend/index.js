const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(express.json());

const pw = require('./pw.js');
const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: `${pw}`,
    database: "felicity"
});
db.connect((err) => {
    if (err) throw err;
    console.log("Connected");
});

// 게시글 업로드
// app.post("/uploadPost", (req, res) => {

// });

// 게시글 보기
app.get("/post", (req, res) => {

    const tableSql =
        "SELECT post.id as postId, post.title as postTitle, symptom as postSymptom, " +
        "date_format((postdate), '%m-%d-%Y') as postDate, username as postAuthor FROM felicity.post " +
        "join user on user_id = user.id;";

    db.query(tableSql, (err, result) => {
        if (err) console.log(err);

        console.log(result);

        res.send(result);
    });
});

app.get("/schedule", (req, res) => {

    const scheduleSql =
        "SELECT schedule.id, date_format((appointment_time), '%m-%d-%Y') as date, " +
        "date_format((appointment_time), '%l:%i %p') as time, user.username as doctor, " +
        "user.email FROM felicity.schedule join user on doctor_id = user.id and patient_id=2;";

    db.query(scheduleSql, (err, result) => {
        if (err) console.log(err);

        console.log(result);

        res.send(result);
    });

})

const port = 3001;
const server = app.listen(port, () => {
    console.log(`Server running on Port ${port}`);
});

