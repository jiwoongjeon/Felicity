const config = require("../config");

const doctorLoginQry = "SELECT get_doctor_login(?, ?) as doctor_id";

function doctorLogin([email, password], callback) {
    config.db.query(doctorLoginQry, [email, password], (err, result) => {

        if (err) console.log(err);

        console.log(result);

        callback(null, result);
    })
}


exports.doctorLogin = doctorLogin;