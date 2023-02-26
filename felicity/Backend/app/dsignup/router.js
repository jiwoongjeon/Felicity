const dsignup = require('./signup_model');
var router = require("express").Router();

function postCheckDoctorEmail(req, res) {
    const email = req.body.email;

    dsignup.checkDoctorEmail(email, (err, result) => {
        if (err) res.json(err);
        else {
            res.json(result);
        }
    })
}

function postDoctorSignUp(req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const sex = req.body.sex;
    const birth = req.body.birth;
    const lang = req.body.preferred_lang;
    const education = req.body.education;
    const profession = req.body.profession;

    dsignup.doctorSignUp([email, password, firstname, lastname, profession, sex, education, birth, lang], (err, result) => {
        if (err) res.json(err);
        else{
            res.json(result);
        }
    })
}

router.post('/dsignup', postDoctorSignUp);
router.post('/checkdoctoremail', postCheckDoctorEmail);

module.exports =router;