const nodemailer = require('nodemailer');
const config = require('../config');
const crypto = require('crypto');
const { rejects } = require('assert');
const { resolve } = require('path');
const patientSignUp = require('../signup/signup_model')
require("dotenv").config();

const insertPatientEmailCodeQry = 
    "INSERT INTO patient_email_validation (email, code) VALUES (?, ?);";

const checkPatientEmailValidationQry = 
    "SELECT patient_email_validation.email, patient_email_validation.code " +
    "FROM patient_email_validation " +
    "WHERE patient_email_validation.email = ? AND patient_email_validation.code = ?;";

const checkPatientEmailEntryQry =
    "SELECT patient_email_validation.email " +
    "FROM patient_email_validation " +
    "WHERE patient_email_validation.email = ?;";

const updatePatientEmailEntryQry = 
    "UPDATE patient_email_validation " +
    "SET patient_email_validation.code = ? " +
    "WHERE patient_email_validation.email = ?;"

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

async function sendEmail(email, callback) {
    try{
        // await patientSignUp.checkPatientEmail(email);
        let code = crypto.randomBytes(3).toString('hex');
        let update = await checkPatientEmailEntry(email);

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
            await updatePatientEmailEntry(code, email);
        }
        else {
            await insertPatientEmailCode(email, code);
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

function patientEmailValidation([email, code], callback) {
    config.db.query(checkPatientEmailValidationQry, [email, code], (err, result) => {
        if (err) {
            callback(err, null);
        }
        if (result.length == 0) {
            callback({ errMsg: "Wrong email or code"}, null)
        }
        else {
            callback(null, {
                success: 'true',
                msg: 'The email is validated'
            });
        }
    })
}

exports.sendEmail = sendEmail;
exports.patientEmailValidation = patientEmailValidation;