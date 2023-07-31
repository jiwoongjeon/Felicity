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

function readPatientScheduleWithDate(req, res){
    const patientId = req.body.patient_id;
    const year = req.body.year;
    const month = req.body.month;
    const date = year + "-" + month + "-01 00:00:00";
    console.log(date);
    const data = [patientId, date, date]

    schedule.patientScheduleWithDate(data, (err, result) => {
        if (err) {
            console.log(err);
            res.json({ errMsg: "Error: Failed on reading schedule." });
        }
        else {
            res.json(result);
        }
    });
}

function readDoctorScheduleWithDate(req, res){
    const doctorId = req.body.doctor_id;
    const year = req.body.year;
    const month = req.body.month;
    const date = year + "-" + month + "-01 00:00:00";
    console.log(date);
    const data = [doctorId, date, date]
    console.log(data);

    schedule.doctorScheduleWithDate(data, (err, result) => {
        if (err) {
            console.log(err);
            res.json({ errMsg: "Error: Failed on reading schedule." });
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

function addNewDocNotes(req, res) {
    const rid = req.body.reservation_id;
    const sid = req.body.symptom_id;
    const diagnosis = req.body.diagnosis;
    const special_note = req.body.special_note;
    const new_record = [rid, sid, diagnosis, special_note]
    console.log(req.body);
    schedule.addNewDocNotes(new_record, (err, result) => {
        if (err) {
            console.log(err);
            res.json({ errMsg: "Error: Failed on adding the new doctor note" })
        }
        else {
            res.json({ msg: "Successfully inserted the new doctor note."})
        }
    })
}

function readPatientPastSchedule(req, res) {
    const patientId = req.body.patient_id;
    schedule.patientPastSchedule(patientId, (err, result) => {
        if (err) {
            console.log(err);
            res.json({errMsg: "Error: Failed on reading the patient's past schedules"})

        }
        else {
            res.json(result);
        }
        
    })
}

router.post("/patient_schedule", readPatientSchedule);
router.post("/doctor_schedule", readDoctorSchedule);
router.post("/create_schedule", postSchedule);
router.get("/read_schedule", readSchedule);
router.post("/accept_request", acceptRequest);
router.post("/add_docnote", addNewDocNotes);
router.post("/patient_schedule_with_date", readPatientScheduleWithDate);
router.post("/doctor_schedule_with_date", readDoctorScheduleWithDate);
router.post("/patient_past_schedule", readPatientPastSchedule);

module.exports = router;