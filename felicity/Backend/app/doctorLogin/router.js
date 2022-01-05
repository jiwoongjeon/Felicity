var login = require("./login_model");
var router = require("express").Router();

function getLogin(req, res) {
    // const email = req.body.email;
    // const password = req.body.password;

    login.doctorLogin(["p1@gmail.com", "1234"], (err, result) => {
        if (err) console.log(err);
        res.json(result);
    })
}

router.get("/dlogin", getLogin);

module.exports = router;