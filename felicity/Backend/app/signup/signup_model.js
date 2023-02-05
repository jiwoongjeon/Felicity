const { json } = require("express");
const config = require("../config");
const bcrypt = require('bcrypt');


const checkPatientEamilQry = 
    "SELECT patient_id FROM patient_login" + 
    " WHERE patient_login.email = ?;";

const checkPatientProfileQry = 
    "SELECT patient_id FROM patient_profile" + 
    " WHERE patient_profile.firstname = ? AND patient_profile.lastname = ? AND patient_profile.birth = ?;";

const insertPatientQry = 
    "INSERT INTO patient (socket) VALUES (NULL);";

const insertPatient_loginQry =
    "INSERT INTO patient_login (patient_id, email, password, salt)" +
    " VALUES ((SELECT id FROM patient ORDER BY id DESC LIMIT 1), ?, ?, ?);"

const insertPatient_profileQry = 
    "INSERT INTO felicity.patient_profile (patient_id, firstname, lastname, birth, sex, preferred_lang) " +
    "VALUES ( (SELECT id FROM patient ORDER BY id DESC LIMIT 1), ?, ?, ?, ?, ?);";

const deletePaitentEmailEntryQry = 
    "DELETE FROM patient_email_validation " +
    "WHERE patient_email_validation.email = ?;";

function checkPatientEmail(email) {
    return new Promise((resolve, reject) => {
        config.db.query(checkPatientEamilQry, email, (err, result) => {
            if (err) {
                return reject(err);
            }
            if (result.length != 0) {
                return reject({ errMsg: "Account is already existed with the email"})
            }
            return resolve(1);
        })
    })
}

function checkPatientProfile(firstname, lastname, birth) {
    return new Promise((resolve, reject) => {
        config.db.query(checkPatientProfileQry, [firstname, lastname, birth], (err, result) => {
            if (err) {
                return reject(err);
            }
            if (result.length != 0) {
                return reject({ errMsg: "Account is already existed"})
            }
            return resolve(1);
        })
    });
}

function insertPatient() {
    return new Promise((resolve, reject) => {
        config.db.query(insertPatientQry, (err, result) => {
            if (err) {
                return reject(err);
            }
            return resolve({
                success: "true",
                msg: "successfully inserting id and socket."
            })
        })
    })
}

function insertPatient_login(email, password, salt) {
    return new Promise((resolve, reject) => {
        config.db.query(insertPatient_loginQry, [email, password, salt], (err, result) => {
            if (err) {
                return reject(err);
            }
            return resolve({
                success: "true",
                msg: "successfully inserting email, password, salt."
            })
        })
    })
}

function insertPatient_profile(firstname, lastname, birth, sex, lang) {
    return new Promise((resolve, reject) => {
        config.db.query(insertPatient_profileQry, [firstname, lastname, birth, sex, lang], (err, result) => {
            if (err) {
                return reject(err);
            }
            return resolve({
                success: "true",
                msg: "successfully inserting patient profile."
            })
        })
    })
}

async function patientSingUp([email, password, firstname, lastname, sex, birth, lang], callback) {
    try {
        // Check the duplications of the users
        // await checkPatientEmail(email);
        // await checkPatientProfile(firstname, lastname, birth);

        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(password, salt);

        await insertPatient();
        await insertPatient_login(email, hashed, salt);
        await insertPatient_profile(firstname, lastname, birth, sex, lang);
        await deletePaitentEmailEntry(email);

        callback(null, [{
            success: "true",
            msg: "Successfully created",
            email: email,
            password: password,
            hashed: hashed
        }]);

    } catch (error) {
        // If email or user information is duplicated, throw error to the front
        callback(error, null);
    }
}

function deletePaitentEmailEntry(email){
    return new Promise((resolve, reject) => {
        config.db.query(deletePaitentEmailEntryQry, email, (err, result) => {
            if (err) {
                reject (err);
            }
            else {
                resolve(result);
            }
        })
    })
}

async function patientCheckEmail(email, callback) {
    try {
        await checkPatientEmail(email);

        callback(null, [{
            success: 'true',
            msg: 'You can use this email for the registration'
        }])
        
    } catch (error) {
        callback(error, null);
    }
}

exports.checkPatientEmail = checkPatientEmail;
exports.patientSingUp = patientSingUp;
exports.patientCheckEmail = patientCheckEmail;