const config = require("../config");

const doctorLoginQry =
    "SELECT doctor_login.doctor_id, firstname, lastname " +
    "from doctor_login join doctor_profile " +
    "where doctor_login.email = ? and doctor_login.password = ? " +
    "and doctor_login.doctor_id = doctor_profile.doctor_id";

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


exports.doctorLogin = doctorLogin;