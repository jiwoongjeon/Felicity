const config = require("../config");
const bcrypt = require('bcrypt');

const patientFindIDQry = 
    "SELECT patient_login.email FROM patient_login INNER JOIN patient_profile ON patient_login.patient_id = patient_profile.patient_id " +
    "WHERE patient_profile.firstname = ? AND patient_profile.lastname = ? AND patient_profile.birth = ?;";

const checkPatientChangePWQry = 
    "SELECT patient_login.patient_id FROM patient_login INNER JOIN patient_profile ON patient_login.patient_id = patient_profile.patient_id " +
    "WHERE patient_profile.firstname = ? " + 
    "AND patient_profile.lastname = ? AND patient_profile.birth = ? AND patient_login.email = ?;";

const getSaltQry = 
    "SELECT patient_login.salt, patient_login.patient_id FROM patient_login " +
    "WHERE patient_login.email = ?;";

const updatePatientPWQry = 
    "UPDATE patient_login SET password=? WHERE patient_id=?;";

function patientFindID([firstname, lastname, birth], callback) {
    config.db.query(patientFindIDQry, [firstname, lastname, birth], (err, result) => {
        if (err) callback(err, null);

        if (result.length != 0) {
            callback(null, result);
        }
        else{
            callback({ errMsg: "No emails with the user information"}, null);
        }
    })
}

function checkPatientChangePW([firstname, lastname, birth, email], callback) {
    config.db.query(checkPatientChangePWQry, [firstname, lastname, birth, email], (err, result) => {
        if (err) callback(err, null);

        if (result.length != 0) {
            callback(null, result);
        }
        else {
            callback([{ errMsg: "Wrong email or user information"}], null);
        }
    })
}

function getSalt_PatientId(email) {
    return new Promise((resolve, reject) => {
        config.db.query(getSaltQry, email, (err, result) => {
            if (err) {
                return reject(err);
            }

            if (result.length != 0) {
                return resolve(result)
            }
            else {
                return reject(-1);
            }
        })
    })
}

function updatePatientPW(patient_id, password) {
    return new Promise((resolve, reject) => {
        config.db.query(updatePatientPWQry, [password, patient_id], (err, result) => {
            if (err) {
                return reject(err);
            }
            return resolve();
        })
    })
}

async function patientChangePW([email, password], callback ) {
    try {
        const result = await getSalt_PatientId(email);
        const patient_id = result[0].patient_id;
        const salt = result[0].salt;
        const hashed = await bcrypt.hash(password, salt);

        await updatePatientPW(patient_id, hashed);

        callback(null, [{
            success: "true",
            msg: "Successfully Changed",
        }])

    } catch (err) {
        callback(error, null);
    }
}

exports.patientFindID = patientFindID;
exports.checkPatientChangePW = checkPatientChangePW;
exports.patientChangePW = patientChangePW;