const e = require("express");
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

function postSchedule(req, res) {
    const scheduleData = req.body;
    console.log(scheduleData)
    const MHTData = req.body.MHT;
    const checkList = MHTData.checklist;

    schedule.insertSymptom(MHTData, (error, result) => {
        if (error) {
            console.log(error);
            res.json({ errMsg: "Error: Failed on creating symptom" });
        }
        else {
            symptomId = result.insertId;
            schedule.insertSymptomList(symptomId, checkList, (error, result) => {
                if (error) {
                    console.log(error);
                    res.json({ errMsg: "Error: Failed on creating symptom list" });
                }
            })
            schedule.insertSchedule(symptomId, scheduleData, (error, result) => {
                if (error) {
                    console.log(error);
                    res.json({ errMsg: "Error: Failed on creating reservation" });
                }
            })
        }
    })
}

router.post("/patient_schedule", readPatientSchedule);
router.post("/doctor_schedule", readDoctorSchedule);
router.post("/create_schedule", postSchedule);

module.exports = router;