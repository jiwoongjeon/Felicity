var schedule = require("./schedule_model");
var router = require("express").Router();

function readPatientSchedule(req, res) {
    const patientId = req.body.patient_id;

    schedule.patientSchedule(patientId, (err, result) => {
        if (err) {
            console.log(err);
            res.json({ errMsg: "Error: Failed on reading schedule." });
        }
        else {
            res.json(result);
        }
    });
}

function readDoctorSchedule(req, res) {
    const doctorId = req.body.doctor_id;

    schedule.doctorSchedule(doctorId, (err, result) => {
        if (err) {
            console.log(err);
            res.json({ errMsg: "Error: Failed on reading schedule." })
        }
        else {
            res.json(result);
        }
    });
}

router.post("/patient_schedule", readPatientSchedule);
router.post("/doctor_schedule", readDoctorSchedule);

module.exports = router;