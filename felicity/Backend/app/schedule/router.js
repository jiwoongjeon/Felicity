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

    schedule.insertSymptom(MHTData, (err, result) => {
        if (err) {
            console.log(err);
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

function readSchedule(req, res) {
    schedule.readReservation((err, result) => {
        if (err) {
            console.log(err);
            res.json({ errMsg: "Error: Failed on reading unresolved reservation" });
        }
        else {
            res.json(result);
        }
    })
}

function acceptRequest(req, res) {
    const doctorId = req.body.doctor_id;
    const reservationId = req.body.reservation_id;
    schedule.acceptReservation(doctorId, reservationId, (err, result) => {
        if (err) {
            console.log(err);
            res.json({ errMsg: "Error: Failed on updating reservation" })
        }
        else {
            res.json({ msg: "Successfully made a reservation" })
        }
    })
}

router.post("/patient_schedule", readPatientSchedule);
router.post("/doctor_schedule", readDoctorSchedule);
router.post("/create_schedule", postSchedule);
router.get("/read_schedule", readSchedule);
router.post("/accept_request", acceptRequest);

module.exports = router;