const config = require("../config");
const bcrypt = require('bcrypt');
const doctorLoginQry =
    "SELECT doctor_login.doctor_id, firstname, lastname " +
    "from doctor_login join doctor_profile " +
    "where doctor_login.email = ? and doctor_login.password = ? " +
    "and doctor_login.doctor_id = doctor_profile.doctor_id";

const doctorGetSaltQry = 
    "SELECT doctor_login.salt FROM doctor_login " +
    "WHERE doctor_login.email = ?;"

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

function getSalt(email) {
    return new Promise((resolve, reject) => {
        config.db.query(doctorGetSaltQry, [email], (err, result) => {
            if (err) {
                return reject(err);
            }
            return resolve(result[0].salt);
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

async function doctorHashLogin([email, password], callback) {
    try{
        const salt = await getSalt(email);
        const hashed = await bcrypt.hash(password, salt);
        const result = await doctorLoginHelper([email, hashed]);
        callback(null, result);
    }
    catch (err){
        callback(err, null);
    }
}

exports.doctorLogin = doctorLogin;
exports.doctorHashLogin = doctorHashLogin;