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
        "SELECT post.id, post.user_id, username, post.title, description FROM felicity.post " +
        "join user on user_id = user.id;";
    
    // const commentSql = 
    //     "SELECT title, comment.user_id, username, comment.description FROM felicity.comment " +
    //     "join post on comment.table_id = post.id " +
    //     "join user on comment.user_id = user.id;";

    db.query(tableSql, (err, result) => {
        if (err) console.log(err);

        console.log(result)
        
        res.send(result);
        
        // db.query(commentSql, (errA, resultA) => {
        //     if (errA) console.log(errA);
            
        //     // res.send(resultA);
        // })
    });
});

const port = 3001;
const server = app.listen(port, () => {
    console.log(`Server running on Port ${port}`);
});

