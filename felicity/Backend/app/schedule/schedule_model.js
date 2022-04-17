const config = require("../config");
var schedule = module.exports;

const pScheduleQry = "SELECT reservation.patient_id as patient_id, reservation.doctor_id as doctor_id, " +
    "doctor_profile.firstname as doctor_firstName, doctor_profile.lastname as doctor_lastName, " +
    "patient_profile.firstname as patient_firstName, patient_profile.lastname as patient_lastName, " +
    "date_format((patient_profile.birth), '%m-%d-%Y') as birthday, patient_profile.sex as sex, " +
    "symptom.reason as request, " +
    "reservation.symptom_id as symptom_id, " +
    "symptom_list.cough as a, symptom_list.vomit as b, symptom_list.fever as c, " +
    "symptom_list.sore_throat as d, symptom_list.runny_nose as e, symptom_list.phlegm as f, " +
    "symptom_list.nauseous as g, symptom_list.out_of_breath as h, symptom_list.stomachache as i, " +
    "symptom_list.chills as j, symptom_list.muscle_sickness as k, symptom_list.other as l, " +
    "symptom.preferred_department as department, " +
    "date_format((reserved_date), '%m-%d-%Y') as reserved_date, " +
    "date_format((reserved_date), '%l:%i %p') as reserved_time, " +
    "symptom.wounded_area as wounded_area, symptom.preferred_department as preferred_department, symptom.injured_time as injured_time, symptom.severity as severity, symptom.reason as reason " +
    "FROM felicity.reservation JOIN symptom_list ON reservation.symptom_id = symptom_list.symptom_id " +
    "JOIN symptom ON reservation.patient_id = symptom.patient_id " +
    "JOIN patient_profile ON reservation.patient_id = patient_profile.patient_id " +
    "JOIN doctor_profile ON " + "reservation.doctor_id = doctor_profile.doctor_id and reservation.patient_id = ?";

const dScheduleQry = "SELECT reservation.patient_id as patient_id, reservation.doctor_id as doctor_id, " +
    "doctor_profile.firstname as doctor_firstName, doctor_profile.lastname as doctor_lastName, " +
    "patient_profile.firstname as patient_firstName, patient_profile.lastname as patient_lastName, " +
    "date_format((patient_profile.birth), '%m-%d-%Y') as birthday, patient_profile.sex as sex, " +
    "symptom.reason as request, " +
    "reservation.symptom_id as symptom_id, " +
    "symptom_list.cough as a, symptom_list.vomit as b, symptom_list.fever as c, " +
    "symptom_list.sore_throat as d, symptom_list.runny_nose as e, symptom_list.phlegm as f, " +
    "symptom_list.nauseous as g, symptom_list.out_of_breath as h, symptom_list.stomachache as i, " +
    "symptom_list.chills as j, symptom_list.muscle_sickness as k, symptom_list.other as l, " +
    "symptom.preferred_department as department, " +
    "date_format((reserved_date), '%m-%d-%Y') as reserved_date, " +
    "date_format((reserved_date), '%l:%i %p') as reserved_time, " +
    "symptom.wounded_area as wounded_area, symptom.preferred_department as preferred_department, symptom.injured_time as injured_time, symptom.severity as severity, symptom.reason as reason " +
    "FROM felicity.reservation JOIN symptom_list ON reservation.symptom_id = symptom_list.symptom_id " +
    "JOIN symptom ON reservation.patient_id = symptom.patient_id " +
    "JOIN patient_profile ON reservation.patient_id = patient_profile.patient_id " +
    "JOIN doctor_profile ON reservation.doctor_id = doctor_profile.doctor_id AND reservation.doctor_id = ?";

const insertScheduleQry =
    "insert into felicity.reservation " +
    "(`symptom_id`, `patient_id`, `doctor_id`, `reserved_date`) " +
    "values (?, ?, ?, ?)"
const insertSymptomQry =
    "insert into felicity.symptom " +
    "(`patient_id`, `wounded_area`, `preferred_department`, `injured_time`, `severity`, `reason`) " +
    "values (?, ?, ?, ?, ?, ?)"

const insertSymptomListQry =
    "insert into felicity.symptom_list (`symptom_id`, `cough`, `vomit`, `fever`, " +
    "`sore_throat`, `phlegm`, `runny_nose`, `nauseous`, `out_of_breath`, `stomachache`, " +
    "`chills`, `muscle_sickness`, `other`)" +
    "values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"


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
    const date = data.date.split('/');
    var time = data.time.split(':')
    time = [time[0], time[1].split(' ')[0], time[1].split(' ')[1]]
    var fulltime;
    if (time[2] == "PM") {
        fulltime = String(parseInt(time[0], 10) + 12) + ':' + time[1] + ':00';
    }
    else {
        fulltime = time[0] + ':' + time[1] + ':00';
    }
    const datetime = date[2] + '-' + date[0] + '-' + date[1] + " " + fulltime

    const scheduleList = [sid, data.MHT.patientId, null, datetime]

    config.db.query(insertScheduleQry, scheduleList, (err, result) => {
        if (err) callback(err, null);

        callback(null, result);
    })
}

schedule.insertSymptom = function insertSymptom(data, callback) {
    // console.log(data)
    const symptomList = [data.patientId, data.hurt, data.department, data.time, data.level, data.why]
    // console.log(symptomList)
    config.db.query(insertSymptomQry, symptomList, (err, result) => {
        if (err) callback(err, null);

        callback(null, result);
    })
}

schedule.insertSymptomList = function insertSymptomList(sid, data, callback) {
    const symptomList = [sid, data[0], data[1], data[2], data[3], data[4], data[5], data[6], data[7], data[8], data[9], data[10], data[12]];
    // console.log()
    config.db.query(insertSymptomListQry, symptomList, (err, result) => {
        if (err) callback(err, null);

        callback(null, result);
    })
}