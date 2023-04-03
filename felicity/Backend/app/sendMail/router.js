const router = require('express').Router();
const emailSender = require('./mail_model')

function postSendEmail(req, res) {
    const email = req.body.email;
    const userType = req.body.userType;

    emailSender.sendEmail([email, userType], (err, result) => {
        if (err) {
            res.json(err);
        }
        else {
            console.log(result);
            res.json(result);
        }
    })
}

function postEamilValidation(req, res) {
    const email = req.body.email;
    const code = req.body.code;
    const userType = req.body.userType;

    emailSender.emailValidation([email, code, userType], (err, result) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);
        }
    })
}


router.post('/sendmail', postSendEmail);
router.post('/emailvalidate', postEamilValidation);
module.exports = router;