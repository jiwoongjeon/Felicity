const config = require("../config");
const bcrypt = require('bcrypt');

const patientLoginQry = 
    "SELECT patient_login.patient_id as user_id, firstname, lastname " +
    "from patient_login join patient_profile " +
    "where patient_login.email = ? and patient_login.password = ? " +
    "and patient_login.patient_id = patient_profile.patient_id";

const patientGetSaltQry = 
    "SELECT patient_login.salt FROM patient_login " +
    "WHERE patient_login.email = ?;"

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



function getSalt(email) {
    return new Promise((resolve, reject) => {
        config.db.query(patientGetSaltQry, [email], (err, result) => {
            if (err) {
                return reject(err);
            }
            return resolve(result[0].salt);
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

async function patientHashLogin([email, password], callback) {
    try{
        const salt = await getSalt(email);
        const hashed = await bcrypt.hash(password, salt);
        const result = await patientLogin2([email, hashed]);
        callback(null, result);
    }
    catch (err){
        callback(err, null);
    }
}


exports.patientLogin = patientLogin;
exports.patientHashLogin = patientHashLogin;