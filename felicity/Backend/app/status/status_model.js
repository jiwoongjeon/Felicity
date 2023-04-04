const config = require("../config");
var status = module.exports;

const getDoctorStatusQry = 
    "SELECT * FROM doctor_profile WHERE doctor_id = ?"
const updateDoctorTimeQry =
    "UPDATE doctor_profile SET timea = ?, timeb = ?  WHERE doctor_id = ?"
const getPatientStatusQry = 
    "SELECT * FROM patient_profile WHERE patient_id = ?"

status.getDoctorStatus = function getDoctorStatus(doctorId, callback) {
    config.db.query(getDoctorStatusQry, doctorId, (err, result) => {
        if (err) callback(err, null);

        if (result.length != 0) {
            const fullname = result[0].firstname + " " + result[0].lastname
            result[0].fullname = fullname
        }
        callback(null, result);
    })
}

status.updateDoctorTime = function updateDoctorTime(doctorId, timeA, timeB, callback) {
    config.db.query(updateDoctorTimeQry, [timeA, timeB, doctorId], (err, result) => {
        if (err) callback(err, null);

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