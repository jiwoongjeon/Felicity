const config = require("../config");
const bcrypt = require('bcrypt');
// const dsignup = module.exports;

const checkDoctorEmailQry = 
    "SELECT doctor_id FROM doctor_login " +
    "WHERE doctor_login.email = ?";

const insertDoctorQry =
    "INSERT INTO doctor (socket) VALUES (NULL);";

const insertDoctor_loginQry = 
    "INSERT INTO doctor_login (doctor_id, email, password, salt) " +
    "VALUES (?, ?, ?, ?);";

const insertDoctor_profileQry = 
    "INSERT INTO doctor_profile (doctor_id, firstname, lastname, profession, email, sex, preferred_lang, education, birth) " +
    "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);";

const deleteDoctorEmailEntryQry =
    "DELETE FROM doctor_email_validation " +
    "WHERE doctor_email_validation.email = ?;";


function insertDoctor() {
    return new Promise((resolve, reject) => {
        config.db.query(insertDoctorQry, (err, result) => {
            if (err) return reject(err);
            else {
                return resolve(result.insertId);
            }
        })
    })
}

function insertDoctor_login(id, email, password, salt) {
    return new Promise((resolve, reject) => {
        config.db.query(insertDoctor_loginQry, [id, email, password, salt], (err, result) => {
            if (err) return reject(err);
            else{
                return resolve({
                    success: 'true',
                    msg: 'Successfully inserting email, password, salt into doctor_login table'
                })
            }
        })
    })
}

function insertDoctor_profile(doctor_id, firstname, lastname, profession, email, sex, preferred_lang, education, birth) {
    return new Promise((resolve, reject) => {
        config.db.query(insertDoctor_profileQry, [doctor_id, firstname, lastname, profession, email, sex, preferred_lang, education, birth], (err, result) => {
            if (err) return reject(err);
            else {
                return resolve({
                    success: 'true',
                    msg: 'Successfully inserting into doctor_profile table'
                })
            }
        })
    })
}

function deleteDoctorEmailEntry(email) {
    return new Promise((resolve, reject) => {
        config.db.query(deleteDoctorEmailEntryQry, email, (err, result) => {
            if (err) reject(err);
            else {
                resolve(result);
            }
        })
    })
}

/* Check "doctor_login" table whether the email is already existing or not */
function checkDoctorEmail(email, callback){
    config.db.query(checkDoctorEmailQry, email, (err, result) => {
        if (err) callback(err, null);
        if (result.length != 0) {
            callback({ errMsg: "Account is already existed with the email"}, null);
        }
        else {
            callback(null, {
                success: 'true',
                msg: 'You can use this email for the Doctor registration.'
            })
        }
    })
}

/*  Main signup function. Insert new information into 3 tables: "doctor", "doctor_login", "doctor_profile"
    After the iserting, delete the entry of "doctor_email_validation" table.
*/
async function doctorSignUp([email, password, firstname, lastname, profession, sex, education, birth, lang], callback) {
    try{
        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(password, salt);

        const doctor_id = await insertDoctor();

        await insertDoctor_login(doctor_id, email, hashed, salt);
        await insertDoctor_profile(doctor_id, firstname, lastname, profession,email, sex, lang, education, birth);
        await deleteDoctorEmailEntry(email);

        callback(null, [{
            success: 'true',
            msg: 'Your account has been successfully created',
            email: email,
            password: password,
            hashed: hashed
        }])

    } catch (err) {
        callback(err, null);
    }
}
exports.checkDoctorEmail = checkDoctorEmail;
exports.doctorSignUp = doctorSignUp;
exports.deleteDoctorEmailEntry = deleteDoctorEmailEntry;
