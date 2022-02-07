var login = require("./login_model");
var router = require("express").Router();

function getLogin(req, res) {
    // const email = req.body.email;
    // const password = req.body.password;

    login.patientLogin(["p1@gmail.com", "1234"], (err, result) => {
        if (err) console.log(err);
        res.json(result);
    })
}

router.get("/plogin", getLogin);

module.exports = router;