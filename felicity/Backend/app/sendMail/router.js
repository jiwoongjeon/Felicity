const router = require('express').Router();
const mail_model = require('./mail_model');

function postSendEmail(req, res) {
    const email = req.body.email;

    mail_model.sendEmail(email, (err, result) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);
        }
    })
}

function postPatientEmailValidation(req, res) {
    const email = req.body.email;
    const code = req.body.code;

    mail_model.patientEmailValidation([email, code], (err, result) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);
        }
    })
}


router.post('/sendmail', postSendEmail);
router.post('/validatepatientemial', postPatientEmailValidation);
module.exports = router;