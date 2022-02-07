var login = require("./login_model");
var router = require("express").Router();

function postPatientLogin(req, res) {
    console.log(req.body)
    const email = req.body.email;
    const password = req.body.password;

    login.patientLogin([email, password], (err, result) => {
        if (err) console.log(err);
        res.json(result);
    })
}

router.post("/plogin", postPatientLogin);

module.exports = router;