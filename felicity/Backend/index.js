const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "wonseok3",
    database: "felicity"
});
db.connect((err) => {
    if (err) throw err;
    console.log("Connected")
});

// 게시글 업로드
// app.post("/uploadPost", (req, res) => {

// });

// 게시글 보기
app.get("/post", (req, res) => {
    // res.send("Main Route");
    const tableSql = 
        "SELECT post.id as postId, post.title as postTitle, symptom as postSymptom, date_format((postdate), '%m-%d-%Y') as postDate, username as postAuthor FROM felicity.post " +
        "join user on user_id = user.id;";
    
    db.query(tableSql, (err, result) => {
        if (err) console.log(err);

        console.log(result)
        
        res.send(result);
    });
});

const port = 3001;
const server = app.listen(port, () => {
    console.log(`Server running on Port ${port}`);
});

