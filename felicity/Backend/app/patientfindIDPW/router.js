var patientFindIDPW = require("./patientfindIDPW_model");
var router = require("express").Router();

function postPatientFindID(req, res) {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const birth = req.body.birth;

    patientFindIDPW.patientFindID([firstname, lastname, birth], (err, result) => {
        if (err) {
            res.json(err)
        }
        else {
            res.json(result);
        }
    })
}

function postCheckPatientChangePW(req, res) {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const birth = req.body.birth;
    const email = req.body.email;

    patientFindIDPW.checkPatientChangePW([firstname, lastname, birth, email], (err, result) => {
        if (err) {
            res.json(err)
        }
        else {
            res.json(result);
        }
    })
}

function postChangePatientPW(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    patientFindIDPW.patientChangePW([email, password], (err, result) => {
        if (err) {
            res.json(err)
        }
        else {
            res.json(result);
        }
    })
}

router.post("/patientfindID", postPatientFindID);
router.post("/checkpatientchangePW", postCheckPatientChangePW);
router.post("/patientchangePW", postChangePatientPW);
module.exports = router;