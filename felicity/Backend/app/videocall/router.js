var videocall = require("./videocall_model");
var router = require("express").Router();

function getDoctorInfo(req, res) {
    const doctorId = req.body.doctor_id;

    videocall.findDoctorInfo(doctorId, (err, result) => {
        if (err) {
            console.log(err);
            res.json({ errMsg: "Error: Failed on calling doctor status"});
        }
        else {
            res.json(result);
        }
    })
}

function getPatientInfo(req, res) {
    const patientId = req.body.patient_id;

    videocall.findPatientInfo(patientId, (err, result) => {
        if (err) {
            console.log(err);
            res.json({ errMsg: "Error: Failed on calling patient status"});
        }
        else {
            res.json(result);
        }
    })
}

router.post("/doctor_info", getDoctorInfo);
router.post("/patient_info", getPatientInfo);

module.exports = router;