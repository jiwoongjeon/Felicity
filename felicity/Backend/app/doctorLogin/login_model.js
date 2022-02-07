const config = require("../config");

const getDoctorLoginQry = "SELECT get_doctor_login(?, ?)";

function doctorLogin([email, password], callback) {
    config.db.query(getDoctorLoginQry, [email, password], (err, result) => {

        if (err) console.log(err);

        console.log(result);

        callback(null, result);
    })
}


exports.doctorLogin = doctorLogin;