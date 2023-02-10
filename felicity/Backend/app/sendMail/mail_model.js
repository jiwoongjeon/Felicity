const nodemailer = require('nodemailer');
const config = require('../config');
const crypto = require('crypto');
const { rejects } = require('assert');
const { resolve } = require('path');
require("dotenv").config();
const emailSender = module.exports;

const insertPatientEmailCodeQry = 
    "INSERT INTO patient_email_validation (email, code) VALUES (?, ?);";

const checkPatientEmailEntryQry =
    "SELECT patient_email_validation.email " +
    "FROM patient_email_validation " +
    "WHERE patient_email_validation.email = ?;";

const updatePatientEmailEntryQry = 
    "UPDATE patient_email_validation " +
    "SET patient_email_validation.code = ? " +
    "WHERE patient_email_validation.email = ?;";

const insertDoctorEmailCodeQry = 
    "INSERT INTO doctor_email_validation (email, code) VALUES (?, ?);";

const checkDoctorEmailEntryQry = 
    "SELECT doctor_email_validation.email " +
    "FROM doctor_email_validation " +
    "WHERE doctor_email_validation.email = ?";

const updateDoctorEmailEntryQry = 
    "UPDATE doctor_email_validation " +
    "SET doctor_email_validation.code = ? " +
    "WHERE doctor_email_validation.email = ?;";

const checkPatientEmailValidationQry = 
    "SELECT patient_email_validation.email, patient_email_validation.code " +
    "FROM patient_email_validation " +
    "WHERE patient_email_validation.email = ? AND patient_email_validation.code = ?;";

const checkDoctorEmailValidationQry = 
    "SELECT doctor_email_validation.email, doctor_email_validation.code " +
    "FROM doctor_email_validation " +
    "WHERE doctor_email_validation.email = ? AND doctor_email_validation.code = ?;";


function insertPatientEmailCode(email, code) {
    return new Promise((resolve, reject) => {
        config.db.query(insertPatientEmailCodeQry, [email, code], (err, result) => {
            if (err) {
                return reject(err);
            }
            return resolve({
                success: "true",
                msg: "successfully inserting email and code into patient_email_validation"
            })
        })
    })
}

function checkPatientEmailEntry(email) {
    return new Promise((resolve, reject) => {
        config.db.query(checkPatientEmailEntryQry, email, (err, result) => {
            if (err) {
                return reject(err);
            }
            if (result.length == 0) {
                return resolve(-1);
            }
            return resolve(1);
        })
    })
}



function updatePatientEmailEntry(code, email) {
    return new Promise((resolve, reject) => {
        config.db.query(updatePatientEmailEntryQry, [code, email], (err, result) => {
            if (err) {
                return reject(err);
            }
            return resolve(result);
        })
    })
}

function insertDoctorEmailCode(email, code) {
    return new Promise((resolve, reject) => {
        config.db.query(insertDoctorEmailCodeQry, [email, code], (err, result) => {
            if (err) {
                return reject(err);
            }
            return resolve({
                success: "true",
                msg: "successfully inserting email and code into doctor_email_validation"
            })
        })
    })
}

function checkDoctorEmailEntry(email) {
    return new Promise((resolve, reject) => {
        config.db.query(checkDoctorEmailEntryQry, email, (err, result) => {
            if(err) {
                return reject(err);
            }
            if(result.length ==0){
                return resolve(-1);
            }
            return resolve(1);
        })
    })
}

function updateDoctorEmailEntry(code, email) {
    return new Promise((resolve, reject) => {
        config.db.query(updateDoctorEmailEntryQry, [code, email], (err, result) => {
            if (err) {
                return reject(err);
            }
            return resolve(result);
        })
    })
}

emailSender.sendEmail = async function sendEmail([email, userType], callback) {
    try{
        let code = crypto.randomBytes(3).toString('hex');
        let update = -1;
        // If user is Doctor
        if (userType == 1){
            update = await checkDoctorEmailEntry(email);
        }
        // If user is Patient
        else if (userType == 2) {
            update = await checkPatientEmailEntry(email);
        }

        let transporter = nodemailer.createTransport({
            service: 'naver',
            host: 'smpt.naver.com',
            port: '587',
            auth: {
                user: process.env.NAVER_USERID,
                pass: process.env.NAVER_PW
            }
        });

        transporter.sendMail(
            {
                from: process.env.NAVER_EMAIL,
                to: email,
                subject: '[example] 회원가입 인증메일입니다.',
                text: code,
                html: code
            },
            (err, info) => {
                if (err) {
                    callback(err, null);
                }
            }
        )
        if (update == 1) {
            if (userType == 1) {
                await updateDoctorEmailEntry(code, email);
            }
            else {
                await updatePatientEmailEntry(code, email);
            }
        }
        else {
            if (userType == 1) {
                await insertDoctorEmailCode(email, code);
            }
            else {
                await insertPatientEmailCode(email, code);
            }
        }
        callback(null, [{
            success: 'true',
            msg: 'successfully sent email and updated code into DB'
        }])
    }
    catch (error) {
        callback(error, null);
    }
}

function patientEmailValidation(email, code){
    return new Promise((resolve, reject) => { 
        config.db.query(checkPatientEmailValidationQry, [email, code], (err, result) => {
            if (err) {
                reject(err);
            }
            if (result.length == 0) {
                reject({ errMsg: "Wrong email or code"});
            }
            resolve({
                success: 'true',
                msg: 'This email is validated'
            })
        })
    })
}

function doctorEmailValidation(email, code) {
    return new Promise ((resolve, reject) => {
        config.db.query(checkDoctorEmailValidationQry, [email, code], (err, result) => {
            if (err) {
                reject(err);
            }
            if (result.length == 0) {
                reject({ errMsg: "Wrong email or code"});
            }
            resolve({
                success: 'true',
                msg: 'This email is validated'
            })
        })
    })
}

emailSender.emailValidation = async function emailValidation([email, code, userType], callback) {
    try {
        let message;
        // If userType == 1: Doctor | If userType == 2: Patient
        if (userType == 1) {
            message = await doctorEmailValidation(email, code);
        } else {
            message = await patientEmailValidation(email, code);
        }

        callback(null, message);
    }
    catch (err) {
        callback(err, null);
    }
}   