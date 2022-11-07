var post = require("./post_model");
var router = require("express").Router();

function getPage(req, res) {
    const category = req.body.department
    // console.log(category)
    if (category == 0) {
        post.getPageNum((err, result) => {
            if (err) {
                console.log(err);
                res.json({ errMsg: "Error: Failed on getting the number of pages" });
            }
            else {
                res.json(Math.ceil(result[0]["pages"] / 5))
            }
        })
    }
    else {
        post.getPageCategoryNum(category, (err, result) => {
            if (err) {
                console.log(err);
                res.json({ errMsg: "Error: Failed on getting the number of pages" });
            }
            else {
                res.json(Math.ceil(result[0]["pages"] / 5))
            }
        })

    }
}

function getPosts(req, res) {
    // const data = req.body
    // console.log(req.body);
    const category = req.body.department
    const targetPage = req.body.targetPage
    var symptomIds = [];
    if (category == 0) {
        post.findPosts(targetPage, (err, result) => {
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
                        // console.log(symptoms)
                        for (i in symptoms) {
                            result[i]["symptoms"] = symptoms[i];
                        }
                        res.json(result);
                    }
                })
            }
        });
    }
    else {
        post.findPostsCategory(targetPage, category, (err, result) => {
            if (err) {
                console.log(err);
                res.json({ errMsg: "Error: Failed on getting posts." })
            }
            else {
                // console.log(result)
                if (result.length == 0) {
                    res.json({ msg: "No posts exists" })
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
                            // console.log(symptoms)
                            for (i in symptoms) {
                                result[i]["symptoms"] = symptoms[i];
                            }
                            res.json(result);
                        }
                    })
                }
            }
        });
    }
}

function getComment(req, res) {
    post.readPostComment(req.body.postId, (error, result) => {
        if (error) {
            console.log(error);
            res.json({ errMsg: "Error: Failed on reading comments" });
        }
        else {
            res.json(result);
        }
    })
}

function postPost(req, res) {
    const postData = req.body;
    const MHTData = req.body.MHT;
    const checkList = MHTData.checklist;
    // console.log(MHTData);

    post.insertSymptom(MHTData, (error, result) => {
        if (error) {
            console.log(error);
            res.json({ errMsg: "Error: Failed on creating symptom" })
        }
        else {
            // console.log(result)
            symptomId = result.insertId
            post.insertSymptomList(symptomId, checkList, (error, result) => {
                if (error) {
                    console.log(error);
                    res.json({ errMsg: "Error: Failed on creating symptom list" });
                }
            })
            post.insertPost(symptomId, postData, (error, result) => {
                if (error) {
                    console.log(error);
                    res.json({ errMsg: "Error: Failed on creating post" });
                }
            })
            res.json({ msg: 1 })
        }
    })

    // res.json("received")
}

function updateComment(req, res) {
    console.log(req.body)
    post.updateIsReplied(req.body.postId, (error, result) => {
        if (error) {
            console.log(error);
            res.json({ errMsg: "Error: Failed on updating post comments" })
        }
    })
    post.insertComment(req.body.postId, req.body.role, req.body.userId, req.body.comment, (error, result) => {
        if (error) {
            console.log(error);
            res.json({ errMsg: "Error: Failed on updating comments" })
        }
    })
    res.json({ msg: "OK" })
}

function cancelReservation(req, res) {
    const id = req.body.id;
    const cancelUser = req.body.cancelUser;
    //console.log(id, cancelUser)
    post.cancelReservation (id, cancelUser, (error, result) => {
        if (error) {
            console.log(error);
            res.json({ errMsg: 'Error: Failed on canceling reservation'});
        }
        else {
            res.json({ Msg: 'reservation has been successfully canceled'})
        }
    })
}

router.post("/post-page", getPage);
router.post("/read-post", getPosts);
router.post("/read-comment", getComment);
router.post("/write-post", postPost);
router.post("/write-comment", updateComment);
router.post("/cancel-reservation", cancelReservation);

module.exports = router;