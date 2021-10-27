var post = require("./post_model");
var router = require("express").Router();

function getPosts(req, res) {
    post.findPosts((error, posts) => {
        if (error) console.log(error);
        res.json(posts);
    })
}

router.get("/post", getPosts);

module.exports = router;