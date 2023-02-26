var login = require("./login_model");
var router = require("express").Router();

function postDoctorLogin(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    login.doctorLogin([email, password], (err, result) => {
        if (err) {
            console.log(err);
            res.json({ errMsg: "Error: Login failed." })
        }
        else {
            res.json(result);
        }
    })
}

function postDoctorHashLogin(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    login.doctorHashLogin([email, password], (err, result) => {
        if (err) {
            console.log(err);
            res.json({ errMsg: "Error: Login failed" })
        }
        else {
            res.json(result);
        }
    })
}

router.post("/dlogin", postDoctorLogin);
router.post("/dlogin_with_hash", postDoctorHashLogin);

module.exports = router;