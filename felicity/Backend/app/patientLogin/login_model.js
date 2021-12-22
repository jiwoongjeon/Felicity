const config = require("../config");

const getPatientLoginQry = "SELECT get_patient_login(?, ?)";

function patientLogin([email, password], callback) {
    // config.db.query(getPatientLoginQry, [email, password], (err, result) => {
    config.db.query(getPatientLoginQry, [email, password], (err, result) => {

        if (err) console.log(err);

        console.log(result);

        callback(null, result);
    })
}


exports.patientLogin = patientLogin;