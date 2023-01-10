const config = require("../config");
var schedule = module.exports;

const pScheduleQry =
    "SELECT reservation.id as rid, reservation.doctor_id, reservation.canceled, " +
    "date_format((reserved_date), '%m-%d-%Y') as reserved_date, " +
    "date_format((reserved_date), '%l:%i %p') as reserved_time, " +
    "doctor_profile.firstname, doctor_profile.lastname, symptom.*, symptom_list.* " +
    "FROM reservation " +
    "JOIN doctor_profile on reservation.doctor_id = doctor_profile.doctor_id " +
    "JOIN symptom on symptom.id = reservation.symptom_id " +
    "JOIN symptom_list on symptom_list.symptom_id = reservation.symptom_id " +
    "WHERE reservation.patient_id = ? and reserved_date > timestamp(now())";

const dScheduleQry =
    "SELECT reservation.id as rid, reservation.patient_id, patient_profile.firstname, reservation.canceled, " +
    "date_format((reserved_date), '%m-%d-%Y') as reserved_date, " +
    "date_format((reserved_date), '%l:%i %p') as reserved_time, " +
    "patient_profile.lastname, sex, date_format((birth), '%m-%d-%Y') as birth, symptom.*, symptom_list.* " +
    "FROM reservation " +
    "JOIN patient_profile ON reservation.patient_id = patient_profile.patient_id " +
    "JOIN symptom ON symptom.id = reservation.symptom_id " +
    "JOIN symptom_list ON symptom_list.symptom_id = reservation.symptom_id " +
    "WHERE reservation.doctor_id = ? and reserved_date > timestamp(now())";

const insertScheduleQry =
    "insert into felicity.reservation " +
    "(`symptom_id`, `patient_id`, `reserved_date`) " +
    "values (?, ?, ?)"

const insertSymptomQry =
    "insert into felicity.symptom " +
    "(`patient_id`, `wounded_area`, `preferred_department`, `injured_time`, `severity`, `reason`) " +
    "values (?, ?, ?, ?, ?, ?)"

const insertSymptomListQry =
    "insert into felicity.symptom_list (`symptom_id`, `cough`, `vomit`, `fever`, " +
    "`sore_throat`, `phlegm`, `runny_nose`, `nauseous`, `out_of_breath`, `stomachache`, " +
    "`chills`, `muscle_sickness`, `other`)" +
    "values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"

const readReservationQry =
    "SELECT reservation.id as rid, patient_profile.firstname, patient_profile.lastname, 1 AS active, " +
    "date_format((reserved_date), '%m-%d-%Y') as reserved_date, " +
    "date_format((reserved_date), '%l:%i %p') as reserved_time, " +
    "symptom.*, symptom_list.* " +
    "FROM reservation " +
    "JOIN patient_profile ON reservation.patient_id = patient_profile.patient_id " +
    "JOIN symptom ON reservation.symptom_id = symptom.id " +
    "JOIN symptom_list ON reservation.symptom_id = symptom_list.symptom_id " +
    "WHERE reservation.doctor_id IS NULL";

const acceptReservationQry =
    "UPDATE reservation SET doctor_id = ? WHERE (id = ?)";

//Doctor add notes before the appointment
const addNewDocNotesQry =
    "INSERT INTO felicity.med_record (`reservation_id`, `symptom_id`, `trans_id`, `diagnosis`, `special_note`, `created_time`)" +
    "VALUES (?,?, NULL, ?,?,?)";

schedule.patientSchedule = function patientSchedule(id, callback) {
    config.db.query(pScheduleQry, id, (err, result) => {

        if (err) callback(err, null);

        callback(null, result);
    });
}

schedule.doctorSchedule = function doctorSchedule(id, callback) {
    config.db.query(dScheduleQry, id, (err, result) => {

        if (err) callback(err, null);
        callback(null, result);
    });
}

schedule.insertSchedule = function insertSchedule(sid, data, callback) {
    const datetime = data.date + " " + data.time + ":00"
    const scheduleList = [sid, data.MHT.patientId, datetime]

    config.db.query(insertScheduleQry, scheduleList, (err, result) => {
        if (err) callback(err, null);

        callback(null, result);
    })
}

schedule.insertSymptom = function insertSymptom(data, callback) {
    const symptomList = [data.patientId, data.hurt, data.department, data.time, data.level, data.why]
    config.db.query(insertSymptomQry, symptomList, (err, result) => {
        if (err) callback(err, null);

        callback(null, result);
    })
}

schedule.insertSymptomList = function insertSymptomList(sid, data, callback) {
    const symptomList = [sid, data[0], data[1], data[2], data[3], data[4], data[5], data[6], data[7], data[8], data[9], data[10], data[12]];
    config.db.query(insertSymptomListQry, symptomList, (err, result) => {
        if (err) callback(err, null);

        callback(null, result);
    })
}

schedule.readReservation = function readReservation(callback) {
    config.db.query(readReservationQry, (err, result) => {
        if (err) callback(err, null);

        callback(null, result);
    })
}

schedule.acceptReservation = function acceptReservation(did, rid, callback) {
    config.db.query(acceptReservationQry, [did, rid], (err, result) => {
        if (err) callback(err, null);

        callback(null, result);
    })
}

schedule.addNewDocNotes = function addNewDocNotes(record, callback) {
    config.db.query(addNewDocNotesQry, [record[0], record[1], record[2], record[3], record[4]], (err, result) => {
        if (err) callback(err, null);
        callback(null, result);
    })
}