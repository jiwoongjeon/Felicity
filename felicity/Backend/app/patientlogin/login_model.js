const config = require("../config");

const patientLoginQry = "SELECT patient_login.patient_id as user_id, firstname, lastname " +
    "from patient_login join patient_profile " +
    "where patient_login.email = ? and patient_login.password = ? " +
    "and patient_login.patient_id = patient_profile.patient_id";

function patientLogin([email, password], callback) {
    config.db.query(patientLoginQry, [email, password], (err, result) => {

        if (err) callback(err, null);

        const nickname = result[0].firstname + " " + result[0].lastname
        result[0].nickname = nickname
        callback(null, result);
    })
}


exports.patientLogin = patientLogin;