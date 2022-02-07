const config = require("../config");

const patientLoginQry = "SELECT get_patient_login(?, ?) as user_id";

function patientLogin([email, password], callback) {
    config.db.query(patientLoginQry, [email, password], (err, result) => {

        if (err) console.log(err);

        console.log(result);

        callback(null, result);
    })
}


exports.patientLogin = patientLogin;