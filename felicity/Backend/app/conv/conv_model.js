const config = require("../config");
var conv = module.exports;

// user가 doctor일때 conv라는 table에서 conv_id들만 가져와서 conversation list에 띄우기 위함
const readDConvQry =
    "SELECT conv.conv_id, conv.patient_id, conv.patient_name " +
    "FROM conv " +
    "WHERE conv.doctor_id = (?)";

// user가 patient일때 conv라는 table에서 conv_id들만 가져와서 conversation list에 띄우기 위함
const readPConvQry =
    "SELECT conv.conv_id, conv.doctor_id, conv.doctor_name " +
    "FROM conv " +
    "WHERE conv.patient_id = (?)";

// chats라는 table에서 특정 doctor이랑 특정 patient가 대화한 내용 가져와서 conversation chat에 띄움
const readChatQry =
    "SELECT chats.name, chats.receiver, chats.message, date_format((chats.time), '%Y/%m/%d %l:%i:%p') AS date " +
    "FROM chats " +
    "WHERE chats.conv_id = (?)";

// conversation list에서 새로운 채팅방이 생기면 conv table에 추가
const insertConvQry =
    "INSERT INTO felicity.conv " +
    "(`doctor_id`, `patient_id`, `doctor_name`, `patient_name`) " +
    "VALUES (?, ?, ?, ?)";

// patient나 doctor가 chatting하면 chats table에 추가
const insertChatQry =
    "INSERT INTO felicity.chats " +
    "(`conv_id`, `name`, `receiver`, `message`, `time`) " +
    "VALUES (?, ?, ?, ?, ?)";

const getDoctorListQry =
    "SELECT doctor_id, firstname, lastname, profession " +
    "FROM doctor_profile ";

const getPatientListQry =
    "SELECT patient_id, firstname, lastname " +
    "FROM patient_profile ";

const getDoctorNameQry =
    "SELECT firstname, lastname " +
    "FROM doctor_profile " +
    "WHERE doctor_id = (?)";

const getPatientNameQry =
    "SELECT firstname, lastname " +
    "FROM patient_profile " +
    "WHERE patient_id = (?)";

const getDoctorChatQry = 
    "SELECT name, message, date_format((time), '%Y/%m/%d %l:%i:%p') AS date, file " +
    "FROM doc_chats ";

const insertDoctorChatQry =
    "INSERT INTO felicity.doc_chats " +
    "(`name`, `message`, `time`, `file`) " +
    "VALUES (?, ?, ?, ?)";

conv.findDConvs = function findDConvs(doctor_id, callback) {
    config.db.query(readDConvQry, doctor_id, (err, result) => {
        if (err) callback(err, null);

        callback(null, result);
    });
}

conv.findPConvs = function findPConvs(patient_id, callback) {
    config.db.query(readPConvQry, patient_id, (err, result) => {
        if (err) callback(err, null);

        callback(null, result)
    });
}

conv.findChat = function findChat(conv_id, callback) {
    config.db.query(readChatQry, conv_id, (err, result) => {
        if (err) callback(err, null);

        callback(null, result);
    });
}

conv.insertConv = function insertConv(doctor_id, patient_id, doctor_name, patient_name, callback) {
    const ids = [doctor_id, patient_id, doctor_name, patient_name];
    config.db.query(insertConvQry, ids, (err, result) => {
        if (err) callback(err, null);

        callback(null, result);
    });
}

conv.insertChat = function insertChat(conv_id, name, receiver, message, time, callback) {
    const chat = [conv_id, name, receiver, message, time];
    config.db.query(insertChatQry, chat, (err, result) => {
        if (err) callback(err, null);

        callback(null, result);
    });
}

conv.findDoctorList = function findDoctorList(callback) {
    config.db.query(getDoctorListQry, (err, result) => {
        if (err) callback(err, null);

        callback(null, result);
    });
}

conv.findPatientList = function findPatientList(callback) {
    config.db.query(getPatientListQry, (err, result) => {
        if (err) callback(err, null);

        callback(null, result);
    });
}

conv.findDoctorName = function findDoctorName(doctor_id, callback) {
    config.db.query(getDoctorNameQry, doctor_id, (err, result) => {
        if (err) callback(err, null);

        callback(null, result);
    });
}

conv.findPatientName = function findPatientName(patient_id, callback) {
    config.db.query(getPatientNameQry, patient_id, (err, result) => {
        if (err) callback(err, null);

        callback(null, result);
    });
}

conv.findDoctorChat = function findDoctorChat(callback) {
    config.db.query(getDoctorChatQry, (err, result) => {
        if (err) callback(err, null);

        callback(null, result);
    });
}

conv.insertDoctorChat = function insertDoctorChat(name, message, time, file_name, callback) {
    const chat = [name, message, time, file_name];
    config.db.query(insertDoctorChatQry, chat, (err, result) => {
        if (err) callback(err, null);

        callback(null, result);
    });
}