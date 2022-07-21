const config = require("../config");
var status = module.exports;

const getDoctorStatusQry = 
    "SELECT * FROM doctor_profile WHERE doctor_id = ?"
const getPatientStatusQry = 
    "SELECT * FROM patient_profile WHERE patient_id = ?"

status.getDoctorStatus = function getDoctorStatus(doctorId, callback) {
    config.db.query(getDoctorStatusQry, doctorId, (err, result) => {
        if (err) callback(err, null);

        if (result.length != 0) {
            const fullname = result[0].firstname + " " + result[0].lastname
            result[0].fullname = fullname
            result[0].time = result[0].timea + " ~ " + result[0].timeb 
        }
        callback(null, result);
    })
}

status.getPatientStatus = function getPatientStatus(patientId, callback) {
    config.db.query(getPatientStatusQry, patientId, (err, result) => {
        if (err) callback(err, null);

        if (result.length != 0) {
            const fullname = result[0].firstname + " " + result[0].lastname
            result[0].fullname = fullname
        }
        callback(null, result);
    })
}