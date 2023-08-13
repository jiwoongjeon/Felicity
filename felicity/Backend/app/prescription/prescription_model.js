var prescription = module.exports;
const config = require("../config");

const readPrescriptionQry = "SELECT * FROM prescription WHERE rid = ? and pid = ? and did = ?"
const writePrescriptionQry = "INSERT INTO prescription (rid, pid, did, department, date, medicine, amount, drug_route, caution) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);"

/*
const readReservationQry = "SELECT reservation.reserved_date as date, doctor_profile.profession as department"
    + " FROM reservation LEFT JOIN doctor_profile ON reservation.doctor_id ="
    + " doctor_profile.doctor_id WHERE reservation.id = ?;"
*/
const readDepartmentQry = "SELECT doctor_profile.profession as department FROM doctor_profile WHERE doctor_profile.doctor_id = ?"

prescription.readPrescription = function readPrescription(data, callback) {
    config.db.query(readPrescriptionQry, data, (err, result) => {
        if (err) callback(err, null);
        callback(null, result);
        })
};

prescription.writePrescription = function writePrescription(prescription, callback) {
    
    config.db.query(writePrescriptionQry, [prescription[0], prescription[1], prescription[2], prescription[3], prescription[4], prescription[5], prescription[6], prescription[7], prescription[8]], (err, result) => {
        if (err) callback(err, null);
        callback(null, result);
    })
};

prescription.readDepartment = function readDepartment(did, callback) {
    config.db.query(readDepartmentQry, did, (err, result) => {
        if (err) callback(err, null);
        callback(null, result);
    })
}