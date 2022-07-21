var status = require("./status_model");
var router = require("express").Router();

function doctorStatus(req, res) {
    const doctorId = req.body.doctorId;

    status.getDoctorStatus(doctorId, (err, result) => {
        if (err) {
            console.log(err);
            res.json({ errMsg: "Error: Failed on calling doctor status"});
        }
        else {
            res.json(result);
        }
    })
}

function patientStatus(req, res) {
    const patientId = req.body.patientId;

    status.getPatientStatus(patientId, (err, result) => {
        if (err) {
            console.log(err);
            res.json({ errMsg: "Error: Failed on calling patient status"});
        }
        else {
            res.json(result);
        }
    })
}

router.post("/dstatus", doctorStatus);
router.post("/pstatus", patientStatus);

module.exports = router