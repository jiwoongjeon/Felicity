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