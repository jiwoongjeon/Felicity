var doctorFindIDPW = require("./doctorfindIDPW_model");
var router = require("express").Router();

function postDoctorFindID(req, res) {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const birth = req.body.birth;

    doctorFindIDPW.doctorFindID([firstname, lastname, birth], (err, result) => {
        if (err) {
            res.json(err)
        }
        else {
            res.json(result);
        }
    })
}

function postCheckDoctorChangePW(req, res) {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const birth = req.body.birth;
    const email = req.body.email;

    doctorFindIDPW.checkDoctorChangePW([firstname, lastname, birth, email], (err, result) => {
        if (err) {
            res.json(err)
        }
        else {
            res.json(result);
        }
    })
}

function postChangeDoctorPW(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    doctorFindIDPW.doctorChangePW([email, password], (err, result) => {
        if (err) {
            res.json(err)
        }
        else {
            res.json(result);
        }
    })
    
}

router.post("/doctorfindID", postDoctorFindID);
router.post("/checkdoctorchangePW", postCheckDoctorChangePW);
router.post("/doctorchangePW", postChangeDoctorPW);
module.exports = router;