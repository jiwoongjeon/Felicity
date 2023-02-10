var login = require("./login_model");
var router = require("express").Router();

function postPatientLogin(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    login.patientLogin([email, password], (err, result) => {
        if (err) {
            console.log(err);
            res.json({ errMsg: "Error: Login failed" })
        }
        else {
            res.json(result);
        }
    })
}

function postPatientHashLogin(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    login.patientHashLogin([email, password], (err, result) => {
        if (err) {
            console.log(err);
            res.json({ errMsg: "Error: Login failed" })
        }
        else {
            res.json(result);
        }
    })
}


router.post("/plogin", postPatientLogin);
router.post("/plogin_with_hash", postPatientHashLogin);

module.exports = router;