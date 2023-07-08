const config = require("../config");
const bcrypt = require('bcrypt');
const doctorLoginQry =
    "SELECT doctor_login.doctor_id, firstname, lastname " +
    "from doctor_login join doctor_profile " +
    "where doctor_login.email = ? and doctor_login.password = ? " +
    "and doctor_login.doctor_id = doctor_profile.doctor_id";

    //doctor_id 도 같이 select
const doctorGetSaltQry = 
    "SELECT doctor_login.salt, doctor_login.doctor_id FROM doctor_login " +
    "WHERE doctor_login.email = ?;"

const updateDoctorPWQry = 
"UPDATE doctor_login SET password=? WHERE doctor_id=?;";

const updateDoctorSaltQry = 
    "UPDATE doctor_login SET salt=? WHERE doctor_id=?;";

function doctorLogin([email, password], callback) {
    config.db.query(doctorLoginQry, [email, password], (err, result) => {

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

function getSalt_DoctorId(email) {
    return new Promise((resolve, reject) => {
        config.db.query(doctorGetSaltQry, [email], (err, result) => {
            if (err) {
                return reject(err);
            }
            return resolve(result[0]);
        })
    })
}

function doctorLoginHelper([email, password]) {
    return new Promise((resolve, reject) => {
        config.db.query(doctorLoginQry, [email, password], (err, result) => {
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

function updateDoctorSalt(doctor_id, newSalt) {
    return new Promise((resolve, reject) => {
        config.db.query(updateDoctorSaltQry, [newSalt, doctor_id], (err, result) => {
            if (err) {
                return reject(err);
            }
            return resolve();
        })
    })
}

async function doctorHashLogin([email, password], callback) {
    try{
        const salt_did = await getSalt_DoctorId(email);
        const salt = salt_did.salt;
        const doctor_id = salt_did.doctor_id;
        //저장된 salt값이 null일 경우, 새로 만들고 그 만들어진 새로운 salt와 hash된 새로운 비번값을 DB에 저장.
        if (salt == null) {
            const saltRounds = 10;

            const newSalt = await bcrypt.genSalt(saltRounds)
            const hashed = await bcrypt.hash(password, newSalt)
                // Store hash in database
                
            await updateDoctorPW(doctor_id, hashed);
            await updateDoctorSalt(doctor_id, newSalt);
            const result = await doctorLoginHelper([email, hashed]);
            callback(null, result);
        }
        else {
        const hashed = await bcrypt.hash(password, salt);
        const result = await doctorLoginHelper([email, hashed]);
        callback(null, result);
        }
    }
    catch (err){
        callback(err, null);
    }
}

exports.doctorLogin = doctorLogin;
exports.doctorHashLogin = doctorHashLogin;