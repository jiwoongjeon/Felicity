const config = require("../config");
var available = module.exports;

const getAvailableDoctorQry =
    "SELECT doctor.id, socket AS available, " +
    "CONCAT('Dr. ', firstname, ' ', lastname) as name, profession AS department " +
    "FROM doctor JOIN doctor_profile ON doctor.id = doctor_profile.doctor_id";

available.getAvailableDoctor = function getAvailableDoctor(callback) {
    config.db.query(getAvailableDoctorQry, (err, result) => {
        if (err) callback(err, null);

        callback(null, result);
    })
}