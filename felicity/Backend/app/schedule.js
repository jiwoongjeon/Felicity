// const res = require("express/lib/response");
const config = require("./config");

var scheduleSql = "SELECT reservation.patient_id as patient_id," + " reservation.doctor_id as doctor_id, " +
"doctor_profile.firstname as doctor_firstName," + " doctor_profile.lastname as doctor_lastName, " +
"date_format((reserved_date), '%m-%d-%Y') as reserved_date, " +
"date_format((reserved_date), '%l:%i %p') as reserved_time " +
"FROM felicity.reservation JOIN doctor_profile ON " + "reservation.doctor_id = doctor_profile.doctor_id and patient_id = "

function patientSchedule(patient_id, callback) {
    config.db.query(scheduleSql + patient_id, (err, result) => {
        
        if (err) console.log(err);
        console.log(result);            
    })
    return callback
}

// function patientSchedule(patient_id, callback)
// {
//     var aa = config.db.query(scheduleSql + patient_id, function(err, result)
//     {
//         if (err) console.log(err);
//     });
//     return aa;

// }

// module.exports.patientSchedule = (patient_id, cb) => {

  
//     config.db.query(scheduleSql + patient_id, function(err, results) {
//       if (err) {
//         throw err;
//       }
//       cb(results);
//     });
//   }
  
//   module.exports.patientSchedule = (patient_id) => {
//     config.db.query(query+patient_id, function(err, results) {
//       if (err) {
//         throw err;
//       }
//       return (results);
//     });
//   }
//   async function  p(req, res) {
//     var games = await db.listGames(req.query.game);
//     res.json(games);
// }
exports.patientSchedule = patientSchedule;


function doctorLogin([email, password], callback) {
    config.db.query(getDoctorLoginQry, [email, password], (err, result) => {

        if (err) console.log(err);

        console.log(result);

        callback(null, result);
    })
}


