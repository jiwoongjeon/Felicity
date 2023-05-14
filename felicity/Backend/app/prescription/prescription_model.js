var prescription = module.exports;
const config = require("../config");

const readPrescriptionQry = "SELECT * FROM prescription WHERE pid = ? and did = ?"
const writePrescriptionQry = "INSERT INTO prescription (pid, did, department, date, description, caution, count) VALUES (?, ?, ?, ?, ?, ?, ?);"


prescription.readPrescription = function readPrescription(data, callback) {
    config.db.query(readPrescriptionQry, data, (err, result) => {
        if (err) callback(err, null);
        callback(null, result);
        })
};

prescription.writePrescription = function writePrescription(prescription, callback) {
    
    config.db.query(writePrescriptionQry, [prescription[0], prescription[1], prescription[2], prescription[3], prescription[4], prescription[5], prescription[6]], (err, result) => {
        if (err) callback(err, null);
        callback(null, result);
    })
};
