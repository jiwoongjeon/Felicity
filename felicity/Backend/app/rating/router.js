const e = require("express");
var rating = require("./rating_model");
var router = require("express").Router();

function addNewRating(req, res) {
    const rid = req.body.rid;
    const pid = req.body.pid;
    const did = req.body.did;
    const rate = req.body.rate;
    const note1 = req.body.note1;
    const note2 = req.body.note2;

    if (rate < 0 || rate > 5 ){
        res.json({ errMsg: "Error: rateing value is out of range." });
    }


    rating.addNewRating([rid, pid, did, rate, note1, note2], (err, result) => {
        if (err) {
            console.log(err);
            res.json({ errMsg: "Error: Failed on reading schedule." });
        }
        else {
            res.json(result);
        }
    });
}

router.post("/add_rating", addNewRating);
module.exports = router;