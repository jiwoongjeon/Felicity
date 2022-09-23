const config = require("../config");
var videocall = module.exports;

const getDoctorSocketQry =
    "SELECT socket FROM reservation JOIN doctor " +
    "ON reservation.id = ? and reservation.doctor_id = doctor.id";
const getPatientSocketQry =
    "SELECT socket FROM reservation JOIN patient " +
    "ON reservation.id = ? and reservation.patient_id = patient.id";

const updateDoctorInRoomQry = "UPDATE reservation SET d_in_room = ? WHERE (id = ?)";
const updatePatientInRoomQry = "UPDATE reservation SET p_in_room = ? WHERE (id = ?)";

const getDoctorInRoomQry = "SELECT d_in_room FROM reservation WHERE id = ?";
const getPatientInRoomQry = "SELECT p_in_room FROM reservation WHERE id = ?";

const getDoctorInfoQry =
    "SELECT firstname, lastname, profession, email " +
    "FROM doctor_profile " +
    "WHERE doctor_id = (?)";

const getPatientInfoQry =
    "SELECT firstname, lastname, date_format((birth), '%m-%d-%Y') as birth, sex " +
    "FROM patient_profile " +
    "WHERE patient_id = (?)";

// Get doctor's socket id from reservation table
videocall.getDoctorSocket = function getDoctorSocket(rid, callback) {
    config.db.query(getDoctorSocketQry, rid, (err, result) => {
        if (err) callback(err, null);

        callback(null, result[0].socket);
    })
}
// Get patient's socket id from reservation table
videocall.getPatientSocket = function getPatientSocket(rid, callback) {
    config.db.query(getPatientSocketQry, rid, (err, result) => {
        if (err) callback(err, null);

        callback(null, result[0].socket);
    })
}

// Update doctor and patient in room
videocall.updateDoctorInRoom = function updateDoctorInRoom(enter, rid, callback) {
    config.db.query(updateDoctorInRoomQry, [enter, rid], (err, result) => {
        if (err) callback(err, null);

        callback(null, result);
    })
}
videocall.updatePatientInRoom = function updatePatientInRoom(enter, rid, callback) {
    config.db.query(updatePatientInRoomQry, [enter, rid], (err, result) => {
        if (err) callback(err, null);

        callback(null, result);
    })
}

// Check if doctor or patient are in the room
videocall.getDoctorInRoom = function getDoctorInRoom(rid, callback) {
    config.db.query(getDoctorInRoomQry, rid, (err, result) => {
        if (err) callback(err, null);

        callback(null, result);
    })
}
videocall.getPatientInRoom = function getPatientInRoom(rid, callback) {
    config.db.query(getPatientInRoomQry, rid, (err, result) => {
        if (err) callback(err, null);

        callback(null, result);
    })
}

videocall.findDoctorInfo = function findDoctorInfo(doctor_id, callback) {
    config.db.query(getDoctorInfoQry, doctor_id, (err, result) => {
        if (err) callback(err, null);

        callback(null, result);
    });
}

videocall.findPatientInfo = function findPatientInfo(patient_id, callback) {
    config.db.query(getPatientInfoQry, patient_id, (err, result) => {
        if (err) callback(err, null);

        callback(null, result);
    });
}