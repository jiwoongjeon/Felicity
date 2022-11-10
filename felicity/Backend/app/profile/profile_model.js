const config = require("../config");
var conv = module.exports;

const readDoctorProfileImageQry =
    "SELECT profile_image " +
    "FROM doctor_profile " +
    "WHERE doctor_id = (?)";

const readPatientProfileImageQry =
    "SELECT profile_image " +
    "FROM patient_profile " +
    "WHERE patient_id = (?)";

const insertDoctorProfileImageQry =
    "UPDATE felicity.doctor_profile " +
    "SET profile_image = (?) " +
    "WHERE doctor_id = (?)";

const insertPatientProfileImageQry =
    "UPDATE felicity.patient_profile " +
    "SET profile_image = (?) " +
    "WHERE patient_id = (?)";

const deleteDoctorProfileImageQry =
    "UPDATE felicity.doctor_profile " +
    "SET profile_image = NULL " +
    "WHERE doctor_id = (?)";

const deletePatientProfileImageQry =
    "UPDATE felicity.patient_profile " +
    "SET profile_image = NULL " +
    "WHERE patient_id = (?)";

conv.findDoctorProfileImagePath = function findDoctorProfileImagePath(id, callback) {
    config.db.query(readDoctorProfileImageQry, id, (err, result) => {
        if (err) callback(err, null);

        callback(null, result);
    });
}

conv.findPatientProfileImagePath = function findDPatientProfileImagePath(id, callback) {
    config.db.query(readPatientProfileImageQry, id, (err, result) => {
        if (err) callback(err, null);

        callback(null, result);
    });
}

conv.insertDoctorProfileImagePath = function insertDoctorProfileImagePath(id, file_name, callback) {
    const info = [file_name, id];
    config.db.query(insertDoctorProfileImageQry, info, (err, result) => {
        if (err) callback(err, null);

        callback(null, result);
    });
}

conv.insertPatientProfileImagePath = function insertPatientProfileImagePath(id, file_name, callback) {
    const info = [file_name, id];
    config.db.query(insertPatientProfileImageQry, info, (err, result) => {
        if (err) callback(err, null);

        callback(null, result);
    });
}

conv.deleteDoctorProfileImagePath = function deleteDoctorProfileImagePath(id, callback) {
    config.db.query(deleteDoctorProfileImageQry, id, (err, result) => {
        if (err) callback(err, null);

        callback(null, result);
    });
}

conv.deletePatientProfileImagePath = function deletePatientProfileImagePath(id, callback) {
    config.db.query(deletePatientProfileImageQry, id, (err, result) => {
        if (err) callback(err, null);

        callback(null, result);
    });
}