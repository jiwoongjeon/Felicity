const config = require("../config");
const bcrypt = require('bcrypt');
const dsignup = require('../dsignup/signup_model');

const doctorFindIDQry = 
    "SELECT doctor_login.email FROM doctor_login INNER JOIN doctor_profile ON doctor_login.doctor_id = doctor_profile.doctor_id " +
    "WHERE doctor_profile.firstname = ? AND doctor_profile.lastname = ? AND doctor_profile.birth = ?;";

const checkDoctorChangePWQry = 
    "SELECT doctor_login.doctor_id FROM doctor_login INNER JOIN doctor_profile ON doctor_login.doctor_id = doctor_profile.doctor_id " +
    "WHERE doctor_profile.firstname = ? " + 
    "AND doctor_profile.lastname = ? AND doctor_profile.birth = ? AND doctor_login.email = ?;";

const getSaltQry = 
    "SELECT doctor_login.salt, doctor_login.doctor_id FROM doctor_login " +
    "WHERE doctor_login.email = ?;";

const updateDoctorPWQry = 
    "UPDATE doctor_login SET password=? WHERE doctor_id=?;";

function doctorFindID([firstname, lastname, birth], callback) {
    config.db.query(doctorFindIDQry, [firstname, lastname, birth], (err, result) => {
        if (err) callback(err, null);

        if (result.length != 0) {
            callback(null, result);
        }
        else{
            callback({ errMsg: "No emails with the user information"}, null);
        }
    })
}

function checkDoctorChangePW([firstname, lastname, birth, email], callback) {
    config.db.query(checkDoctorChangePWQry, [firstname, lastname, birth, email], (err, result) => {
        if (err) callback(err, null);

        if (result.length != 0) {
            callback(null, result);
        }
        else {
            callback([{ errMsg: "Wrong email or user information"}], null);
        }
    })
}

function getSalt_DoctorId(email) {
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

function updateDoctorPW(doctor_id, password) {
    return new Promise((resolve, reject) => {
        config.db.query(updateDoctorPWQry, [password, doctor_id], (err, result) => {
            if (err) {
                return reject(err);
            }
            return resolve();
        })
    })
}

async function doctorChangePW([email, password], callback ) {
    try {
        const result = await getSalt_DoctorId(email);
        const doctor_id = result[0].doctor_id;
        const salt = result[0].salt;
        const hashed = await bcrypt.hash(password, salt);

        await updateDoctorPW(doctor_id, hashed);

        // At the end of the process, delete the entry of the doctor_email_validation.
        await dsignup.deleteDoctorEmailEntry(email);

        callback(null, [{
            success: "true",
            msg: "Successfully Changed",
        }])

    } catch (err) {
        callback(err, null);
    }
}

exports.doctorFindID = doctorFindID;
exports.checkDoctorChangePW = checkDoctorChangePW;
exports.doctorChangePW = doctorChangePW;