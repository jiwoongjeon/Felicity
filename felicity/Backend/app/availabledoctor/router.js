var available = require("./availabledoctor_model");
var router = require("express").Router();

function getAvailableDoctor(req, res) {
    available.getAvailableDoctor((err, result) => {
        if (err) console.log(err);
        else {
            res.json(result);
        }
    })
}

router.get("/available-doctor", getAvailableDoctor);

module.exports = router;