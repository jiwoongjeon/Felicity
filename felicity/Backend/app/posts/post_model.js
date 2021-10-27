const config = require("../config");

const readPostQry =
    "SELECT post.id as postId, post.title as postTitle, symptom as postSymptom, " +
    "date_format((postdate), '%m-%d-%Y') as postDate, username as postAuthor FROM felicitytest.post " +
    "join user on user_id = user.id;";

function findPosts(callback) {
    config.db.query(readPostQry, (err, result) => {
        if (err) console.log(err);

        console.log(result);

        callback(null, result);
    })
}

exports.findPosts = findPosts;