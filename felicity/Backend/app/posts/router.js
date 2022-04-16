var post = require("./post_model");
var router = require("express").Router();

function getPosts(req, res) {
    var symptomIds = [];
    post.findPosts((err, result) => {
        if (err) {
            console.log(err);
            res.json({ errMsg: "Error: Failed on getting posts." })
        }
        else {
            for (i in result) {
                symptomIds.push(result[i].sid);
            }

            post.findSymptoms(symptomIds, (error, symptoms) => {
                if (error) {
                    console.log(error);
                    res.json({ errMsg: "Error: Failed on reading symptom list." })
                }
                else {
                    for (i in symptoms) {
                        result[i]["symptoms"] = symptoms[i];
                    }
                    res.json(result);
                }
            })
        }
    });
}

router.get("/post", getPosts);

module.exports = router;