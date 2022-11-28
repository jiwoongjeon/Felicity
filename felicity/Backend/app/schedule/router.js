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

//symptom_id는 foreign key 이기 때문에 symptom table의 id와 매칭이 맞아야 insert 가능합니다.
function addNewDocNotes(req, res) {
    const pid = req.body.patient_id;
    const did = req.body.doctor_id;
    const sid = req.body.symptom_id;
    const diagnosis = req.body.diagnosis;
    const special_note = req.body.special_note;
    const created_time = req.body.created_time;
    const new_record = [pid, did, sid, diagnosis, special_note, created_time]
    schedule.addNewDocNotes(new_record, (err, result) => {
        if (err) {
            console.log(err);
            res.json({ errMsg: "Error: Failed on adding new doctor notes" })
        }
        else {
            res.json({ msg: "Successfully inserted a new doctor note."})
        }
    })
}
router.post("/patient_schedule", readPatientSchedule);
router.post("/doctor_schedule", readDoctorSchedule);
router.post("/create_schedule", postSchedule);
router.get("/read_schedule", readSchedule);
router.post("/accept_request", acceptRequest);
router.post("/add_docnote", addNewDocNotes);

module.exports = router;