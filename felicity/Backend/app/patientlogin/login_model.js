const config = require("../config");
const bcrypt = require('bcrypt');

const patientLoginQry = 
    "SELECT patient_login.patient_id as user_id, firstname, lastname " +
    "from patient_login join patient_profile " +
    "where patient_login.email = ? and patient_login.password = ? " +
    "and patient_login.patient_id = patient_profile.patient_id";

const patientGetSaltQry = 
    "SELECT patient_login.salt, patient_login.patient_id FROM patient_login " +
    "WHERE patient_login.email = ?;"


const updatePatientPWQry = 
"UPDATE patient_login SET password=? WHERE patient_id=?;";

const updatePatientSaltQry = 
    "UPDATE patient_login SET salt=? WHERE patient_id=?;";

function patientLogin([email, password], callback) {
    config.db.query(patientLoginQry, [email, password], (err, result) => {

        if (err) callback(err, null);

        if (result.length != 0) {
            const nickname = result[0].firstname + " " + result[0].lastname
            result[0].nickname = nickname
            callback(null, result);
        }
        else {
            callback({ errMsg: "Wrong email or password" }, null)
        }
    })
}



function getSalt_PatientId(email) {
    return new Promise((resolve, reject) => {
        config.db.query(patientGetSaltQry, [email], (err, result) => {
            if (err) {
                return reject(err);
            }
            return resolve(result[0]);
        })
    })
}

function patientLogin2([email, password]) {
    return new Promise((resolve, reject) => {
        config.db.query(patientLoginQry, [email, password], (err, result) => {
            if (err) reject(err);
            if (result.length != 0) {
                const nickname = result[0].firstname + " " + result[0].lastname;
                result[0].nickname = nickname;
                resolve(result);
            }
            reject({errMsg: "Wrong email or password"});
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

function updatePatientSalt(patient_id, newSalt) {
    return new Promise((resolve, reject) => {
        config.db.query(updatePatientSaltQry, [newSalt, patient_id], (err, result) => {
            if (err) {
                return reject(err);
            }
            return resolve();
        })
    })
}

async function patientHashLogin([email, password], callback) {
    try{
        const salt_pid = await getSalt_PatientId(email);
        const salt = salt_pid.salt;
        const patient_id = salt_pid.patient_id;
        //저장된 salt값이 null일 경우, 새로 만들고 그 만들어진 새로운 salt와 hash된 새로운 비번값을 DB에 저장.
        if (salt == null) {
            const saltRounds = 10;

            const newSalt = await bcrypt.genSalt(saltRounds)
            const hashed = await bcrypt.hash(password, newSalt)
                // Store hash in database
                
            await updatePatientPW(patient_id, hashed);
            await updatePatientSalt(patient_id, newSalt);
            const result = await patientLogin2([email, hashed]);
            callback(null, result);
        }
        else {
        const hashed = await bcrypt.hash(password, salt);
        const result = await patientLogin2([email, hashed]);
        callback(null, result);
        }
    }
    catch (err){
        callback(err, null);
    }
}


exports.patientLogin = patientLogin;
exports.patientHashLogin = patientHashLogin;