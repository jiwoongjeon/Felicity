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

const updateUnderlyingDiseaseQry = 
    "UPDATE felicity.patient_profile SET underlying_disease = ? WHERE patient_id = ?"

const updatePatientPreferredLangQry = 
    "UPDATE felicity.patient_profile SET preferred_lang = ? WHERE patient_id = ?"

const updateDoctorPreferredLangQry = 
    "UPDATE felicity.doctor_profile SET preferred_lang = ? WHERE doctor_id = ?"

const updateProfessionQry = 
    "UPDATE felicity.doctor_profile SET profession = ? WHERE doctor_id = ?"

const updateEducationQry = 
    "UPDATE felicity.doctor_profile SET education = ? WHERE doctor_id = ?"

const updateAvailableTimeQry = 
    "UPDATE felicity.doctor_profile SET timea = ?, timeb = ? WHERE doctor_id = ?"


    
conv.updateUnderlyingDisease = function updateUnderlyingDisease(patientId, underDisease, callback){
    const info = [underDisease, patientId];
    config.db.query(updateUnderlyingDiseaseQry, info, (err, result) => {
        if (err) callback(err, null);

        callback(null, result);
    });
}

conv.updatePatientPreferredLang = function updatePatientPreferredLang(patientId, lang, callback){
    const info = [lang, patientId];
    config.db. query(updatePatientPreferredLangQry, info, (err, result) => {
        if (err) callback(err, null);

        callback(null, result);
    });
}

conv.updateDoctorPreferredLang = function updateDoctorPreferredLang(doctorId, lang, callback){
    const info = [lang, doctorId];
    config.db. query(updateDoctorPreferredLangQry, info, (err, result) => {
        if (err) callback(err, null);

        callback(null, result);
    });
}

conv.updateProfession = function updateProfession(doctorId, profession, callback){
    const info = [profession, doctorId];
    config.db.query(updateProfessionQry, info, (err, result) => {
        if(err) callback(err, null);

        callback(null, result);
    });
}

conv.updateEducation = function updateEducation(doctorId, education, callback){
    const info = [education, doctorId];
    config.db.query(updateEducationQry, info, (err, result) => {
        if(err) callback(err, null);

        callback(null, result);
    });
}

conv.updateAvailableTime = function updateAvailableTime(doctorId, timeA, timeB, callback){
    const info = [timeA, timeB, doctorId];
    config.db.query(updateAvailableTimeQry, info, (err, result) => {
        if(err) callback(err, null);

        callback(null, result);
    });
}


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