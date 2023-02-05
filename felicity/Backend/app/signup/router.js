var signup = require("./signup_model");
var router = require("express").Router();

function postSingUp(req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const sex = req.body.sex;
    const birth = req.body.birth;
    const lang = req.body.preferred_lang;

    signup.patientSingUp([email, password, firstname, lastname, sex, birth, lang], (err, result) => {
        if (err) {
            res.json(err)
        }
        else {
            res.json(result);
        }
    })
}

function postCheckPatientEmail(req, res) {
    const email = req.body.email;

    signup.patientCheckEmail(email, (err, result) => {
        if (err) {
            res.json(err);
        } 
        else {
            res.json(result);
        }
    })
}

router.post("/signup", postSingUp);
router.post("/checkpatientemail", postCheckPatientEmail);

module.exports = router;