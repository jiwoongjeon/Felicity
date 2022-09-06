const config = require("../config");
var conn = module.exports;

const checkDoctorSocketQry = "SELECT socket FROM doctor WHERE id = ?";
const checkPatientSocketQry = "SELECT socket FROM patient WHERE id = ?";

const updateDoctorSocketQry = "UPDATE doctor SET socket = ? WHERE (id = ?)";
const updatePatientSocketQry = "UPDATE patient SET socket = ? WHERE (id = ?)";

const deleteDoctorSocketQry = "UPDATE doctor SET socket = NULL WHERE (socket = ?)";
const deletePatientSocketQry = "UPDATE patient SET socket = NULL WHERE (socket = ?)";

conn.checkDoctorSocket = function checkDoctorSocket(doctorId, callback) {
    config.db.query(checkDoctorSocketQry, doctorId, (err, result) => {
        if (err) callback(err, null);

        callback(null, result);
    })
}

conn.checkPatientSocket = function checkPatientSocket(patientId, callback) {
    config.db.query(checkPatientSocketQry, patientId, (err, result) => {
        if (err) callback(err, null);

        callback(null, result);
    })
}

conn.updateDoctorSocket = function updateDoctorSocket(socketId, doctorId, callback) {
    config.db.query(updateDoctorSocketQry, [socketId, doctorId], (err, result) => {
        if (err) callback(err, null);

        callback(null, result);
    });
};

conn.updatePatientSocket = function updatePatientSocket(socketId, patientId, callback) {
    config.db.query(updatePatientSocketQry, [socketId, patientId], (err, result) => {
        if (err) callback(err, null);

        callback(null, result);
    });
};

conn.deleteDoctorSocket = function deleteDoctorSocket(socketId, callback) {
    config.db.query(deleteDoctorSocketQry, socketId, (err, result) => {
        if (err) callback(err, null);

        callback(null, result);
    });
};

conn.deletePatientSocket = function deletePatientSocket(socketId, callback) {
    config.db.query(deletePatientSocketQry, socketId, (err, result) => {
        if (err) callback(err, null);

        callback(null, result);
    });
};