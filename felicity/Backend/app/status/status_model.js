const config = require("../config");
var status = module.exports;

const getDoctorStatusQry = 
    "SELECT * FROM doctor_profile WHERE doctor_id = ?"
const getPatientStatusQry = 
    "SELECT * FROM patient_profile WHERE patient_id = ?"

status.getDoctorStatus = function getDoctorStatus(doctorId, callback) {
    config.db.query(getDoctorStatusQry, doctorId, (err, result) => {
        if (err) callback(err, null);

        callback(null, result);
    })
}

status.getPatientStatus = function getPatientStatus(patientId, callback) {
    config.db.query(getPatientStatusQry, patientId, (err, result) => {
        if (err) callback(err, null);

        callback(null, result);
    })
}