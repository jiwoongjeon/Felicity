const config = require("../config");
var vc = module.exports;

const getDoctorInfoQry =
    "SELECT firstname, lastname, profession, email " +
    "FROM doctor_profile " +
    "WHERE doctor_id = (?)";

const getPatientInfoQry =
    "SELECT firstname, lastname, date_format((birth), '%m-%d-%Y') as birth, sex " +
    "FROM patient_profile " +
    "WHERE patient_id = (?)";

vc.findDoctorInfo = function findDoctorInfo(doctor_id, callback) {
    config.db.query(getDoctorInfoQry, doctor_id, (err, result) => {
        if (err) callback(err, null);

        callback(null, result);
    });
}

vc.findPatientInfo = function findPatientInfo(patient_id, callback) {
    config.db.query(getPatientInfoQry, patient_id, (err, result) => {
        if (err) callback(err, null);

        callback(null, result);
    });
}