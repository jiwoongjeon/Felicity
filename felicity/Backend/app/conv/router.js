var conv = require("./conv_model");
var router = require("express").Router();
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: path.join("./uploads"), // callBack(null, 'uploads/');
    filename: function(req, file, callBack) {
        callBack(null, file.originalname);
    }
});

const upload = multer({
    storage: storage
}).single("file");

function getDoctorConvList(req, res) {
    const doctor_id = req.body.doctor_id;
    var convIds = [];
    var patientIds = [];
    var patientNames = [];
    conv.findDConvs(doctor_id, (err, result) => {
        if (err) {
            console.log(err);
            res.json({ errMsg: "Error: Failed on getting patient_ids." })
        }
        else {
            for (i in result) {
                convIds.push(result[i].conv_id);
                patientIds.push(result[i].patient_id);
                patientNames.push(result[i].patient_name);
            }
            res.json({ convId: convIds, patientId: patientIds, patientName: patientNames });
        }
    });
}

function getPatientConvList(req, res) {
    const patient_id = req.body.patient_id;
    var convIds = [];
    var doctorIds = [];
    var doctorNames = [];
    conv.findPConvs(patient_id, (err, result) => {
        if (err) {
            console.log(err);
            res.json({ errMsg: "Error: Failed on getting doctor_ids." })
        }
        else {
            for (i in result) {
                convIds.push(result[i].conv_id);
                doctorIds.push(result[i].doctor_id);
                doctorNames.push(result[i].doctor_name);
            }
            res.json({ convId: convIds, doctorId: doctorIds, doctorName: doctorNames });
        }
    });
}

function getChats(req, res) {
    const conv_id = req.body.conv_id;
    var nameArr = [];
    var chatArr = [];
    var timeArr = [];
    conv.findChat(conv_id, (err, result) => {
        if (err) {
            console.log(err);
            res.json({ errMsg: "Error: Failed on getting chats." })
        }
        else {
            for (i in result) {
                nameArr.push({ sender: result[i].name, receiver: result[i].receiver });
                chatArr.push(result[i].message);
                timeArr.push(result[i].date);
            }
            res.json({ nameArr: nameArr, chatArr: chatArr, timeArr: timeArr });
        }
    });
}

function postConvList(req, res) {
    const doctor_id = req.body.doctor_id;
    const patient_id = req.body.patient_id;
    const doctor_name = req.body.doctor_name;
    const patient_name = req.body.patient_name;
    conv.insertConv(doctor_id, patient_id, doctor_name, patient_name, (err, result) => {
        if (err) {
            console.log(err);
            res.json({ errMsg: "Error: Failed on creating conversation" })
        }
    });
}

function postChat(req, res) {
    // const chat_id = req.body.chat_id;
    const conv_id = req.body.conv_id;
    const name = req.body.name;
    const receiver = req.body.receiver;
    const message = req.body.message;
    const time = req.body.time;
    conv.insertChat(conv_id, name, receiver, message, time, (err, result) => {
        if (err) {
            console.log(err);
            res.json({ errMsg: "Error: Failed on creating conversation" })
        }
    });
}

function getDoctorList(req, res) {
    const idArr = [];
    const nameArr = [];
    const professionArr = [];
    conv.findDoctorList((err, result) => {
        if (err) {
            console.log(err);
            res.json({ errMsg: "Error: Failed on getting doctor name." }) 
        }
        else {
            for (i in result) {
                idArr.push(result[i].doctor_id);
                nameArr.push(result[i].firstname + " " + result[i].lastname);
                professionArr.push(result[i].profession);
            }
            res.json({ idArr: idArr, nameArr: nameArr, professionArr: professionArr });
        }
    })
}

function getPatientList(req, res) {
    const idArr = [];
    const nameArr = [];
    conv.findPatientList((err, result) => {
        if (err) {
            console.log(err);
            res.json({ errMsg: "Error: Failed on getting patient name." }) 
        }
        else {
            for (i in result) {
                idArr.push(result[i].patient_id);
                nameArr.push(result[i].firstname + " " + result[i].lastname);
            }
            res.json({ idArr: idArr, nameArr: nameArr });
        }
    })
}

function getDoctorName(req, res) {
    const doctor_id = req.body.doctor_id;
    conv.findDoctorName(doctor_id, (err, result) => {
        if (err) {
            console.log(err);
            res.json({ errMsg: "Error: Failed on getting doctor name." }) 
        }
        else {
            const name = result[0].firstname + " " + result[0].lastname;
            res.json({ doctor_name: name });
        }
    })
}

function getPatientName(req, res) {
    const patient_id = req.body.patient_id;
    conv.findPatientName(patient_id, (err, result) => {
        if (err) {
            console.log(err);
            res.json({ errMsg: "Error: Failed on getting doctor name." }) 
        }
        else {
            const name = result[0].firstname + " " + result[0].lastname;
            res.json({ patient_name: name });
        }
    })
}

function getDoctorChat(req, res) {
    var nameArr = [];
    var chatArr = [];
    var timeArr = [];
    var fileArr = [];
    conv.findDoctorChat((err, result) => {
        if (err) {
            console.log(err);
            res.json({ errMsg: "Error: Failed on getting doctor name." }) 
        }
        else {
            for (i in result) {
                nameArr.push(result[i].name);
                chatArr.push(result[i].message);
                timeArr.push(result[i].date);
                fileArr.push(result[i].file);
            }
            res.json({ nameArr: nameArr, chatArr: chatArr, timeArr: timeArr, fileArr: fileArr });
        }
    })
}

function postDoctorChat(req, res) {
    const name = req.body.name;
    const message = req.body.message;
    const time = req.body.time;
    var file = req.body.file_name;
    if (file !== "") {
        res.send({ fileInfo: req.file });
    }
    conv.insertDoctorChat(name, message, time, file, (err, result) => {
        if (err) {
            console.log(err);
            res.json({ errMsg: "Error: Failed on creating conversation" });
        }
    });
}

router.post("/doctor_conv", getDoctorConvList);
router.post("/patient_conv", getPatientConvList);
router.post("/get_chat_conv", getChats);
router.post("/post_conv", postConvList);
router.post("/post_chat_conv", postChat);
router.post("/get_doctor_list", getDoctorList);
router.post("/get_patient_list", getPatientList);
router.post("/get_doctor_name", getDoctorName);
router.post("/get_patient_name", getPatientName);
router.post("/get_doctor_chat", getDoctorChat);
router.post("/post_doctor_chat", postDoctorChat);
router.post("/post_file", (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            return req.json({ success: false, err });
        }
        return res.json({
            success: true,
            filePath: res.req.file.path,
            fileName: res.req.file.filename,
        });
    });
});

module.exports = router;