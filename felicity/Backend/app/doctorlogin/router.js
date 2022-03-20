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

router.post("/dlogin", postDoctorLogin);

module.exports = router;