const config = require("../config");

const readScheduleQry =
    "SELECT schedule.id, date_format((appointment_time), '%m-%d-%Y') as date, " +
    "date_format((appointment_time), '%l:%i %p') as time, user.username as doctor, " +
    "user.email FROM felicitytest.schedule join user on doctor_id = user.id and patient_id=2;";

function findSchedules(callback) {
    config.db.query(readScheduleQry, (err, result) => {
        if (err) console.log(err);
        console.log(result);
        callback(null, result);
    });
};

exports.findSchedules = findSchedules;