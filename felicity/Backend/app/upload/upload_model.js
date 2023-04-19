const AWS = require('aws-sdk');
const aws = require("./awsKeys");
const config = require("../config");
var awsFile = module.exports;

AWS.config.loadFromPath(__dirname + "/awsconfig.json")
const s3 = new AWS.S3();

//Profile Img 
const getPrevPatientObjKey = "SELECT profile_image FROM patient_profile WHERE patient_id = ?;"
const getPrevDoctorObjKey = "SELECT profile_image FROM doctor_profile WHERE doctor_id = ?;"
const savePatientProfileQry = "UPDATE patient_profile SET profile_image = ? WHERE patient_id = ?;"
const saveDoctorProfileQry = "UPDATE doctor_profile SET profile_image = ? WHERE doctor_id = ?;"

//Chat File
const getDateTimeDocChatQry = "SELECT time FROM doc_chats WHERE chat_id = ?"
const getChatFileQry = "SELECT file FROM doc_chats WHERE chat_id = ?"
const saveDocChatFileQry = "UPDATE doc_chats SET file = ? WHERE chat_id = ?;"


awsFile.uploadProfileFile = function uploadProfileFile(userType, userId, filename, file, callback) {
    const params = {
        Bucket: aws.bucketName,
        Key: "profile/" + userType + "/" + userId + "/" + filename,
        Body: file
    };

    //if the user is a doctor
    if (userType == "doctor") {
        config.db.query(getPrevDoctorObjKey, userId, (err, res) => {
            if(err) {
                console.log(err);
            }
            if (res != null) {
                console.log(res);
            var objToDelete = res;
            const deleteDocParams = {
                Bucket: aws.bucketName,
                Key: "profile/" + userType + "/" + userId + "/" + objToDelete,
                
            }
            s3.deleteObject(deleteDocParams).promise()
            config.db.query(saveDoctorProfileQry, [filename, userId], (err, result) => {
                if (err) callback(err, null)
                callback(null, result)
            })
        }
            
        })
    } else {
        config.db.query(getPrevPatientObjKey, userId, (err, res) => {
            if (err) {console.log(err)}
            if (res!= null) {
            var objToDelete = res[0]['profile_image'];
            console.log(res);
            const deletePatParams = {
                Bucket: aws.bucketName,
                Key: "profile/" + userType + "/" + userId + "/" + objToDelete,
                
            }
            console.log(deletePatParams)
            s3.deleteObject(deletePatParams).promise()
            config.db.query(savePatientProfileQry, [filename, userId], (err, result) => {
                if (err) { console.log(err) }
                console.log(result)
            })
        }
        })
    }
    
    s3.upload(params, (err, data) => {
        if (err) console.log(err);
        else {
            console.log('file upload successful')
        }
    })

    
}

awsFile.uploadChatFile = function uploadChatFile (chatType, chatId, filename, file, callback) {
    const params = {
        Bucket: aws.bucketName,
        Key: "chat/" + chatType + "/" + chatId + "/" + filename,
        Body: file
    };


    //Doctors' chat
    if (chatType == "D2D") {
        config.db.query(getChatFileQry, chatId, (err, result) => {
            if(err) {console.log(err)};
            if (res == null) {
            config.db.query(saveDocChatFileQry, [filename, chatId], (err, result) => {
                if (err) callback(err, null);
                callback(null, result)
            })
            s3.upload(params, (err, data) => {
                if (err) console.log(err);
                else {
                    console.log('file uploaded successfully')
                }
            })}
        })
    }
         
    else {
        config.db.query(getChatFileQry, chatId, (err, result) => {
            if(err) {console.log(err)};
            if (res == null) {
                config.db.query(saveDocChatFileQry, [filename, chatId], (err, result) => {
                    if (err) callback(err, null);
                    callback(null, result)
                })
                s3.upload(params, (err, data) => {
                    if (err) console.log(err);
                    else {
                        console.log('file uploaded successfully')
                    }
                })}
            })
        }
        
    }



awsFile.downloadProfileFile = function downloadProfileFile( userType, userId, callback) {
    
    
    
    if (userType == 1) {
        config.db.query(getPrevDoctorObjKey, userId, (err, res) => {
            if(err) {
                console.log(err);
            }
            if (res != null) {
                const filename = res[0]["profile_image"];
                const params = {
                    Bucket: aws.bucketName,
                    Key: "profile/doctor/" + userId + "/" + filename
                };
                s3.getObject(params, (err, data) => {
                    if(err) callback(err, null)
                    else {
                    callback(null, data); }
                })
                
            }
        })
    } else {
        config.db.query(getPrevPatientObjKey, userId, (err, res) => {
            if (err) {console.log(err)}
            if (res!= null) {
                const filename = res[0]["profile_image"];
                const params = {
                    Bucket: aws.bucketName,
                    Key: "profile/patient/" + userId + "/" + filename
                };
                s3.getObject(params, (err, data) => {
                    if(err) callback(err, null)
                    console.log('file downloaded successfully');
                    callback(err, data)
                })
                
            }
        })
    }
    

   
}

awsFile.downloadChatFile = function downloadChatFile( chatType, chatId, callback) {
    
    if (chatType == 1) {
    config.db.query(getChatFileQry, chatId, (err, res) => {
        if (err) {console.log(err)};
        if(res != null) {
            const filename = res[0]["file"];
            const params = {
                Bucket: aws.bucketName,
                Key: "chat/D2D/" + chatId + "/" + filename
            };
        }
        s3.getObject(params, (err, data) => {
            if(err) { console.log(err) };
            console.log('file downloaded successfully');
            callback(null, data)
        })
    })
} else {
    config.db.query(getChatFileQry, chatId, (err, res) => {
        if (err) {console.log(err)};
        if(res != null) {
            const filename = res[0]["file"];
            const params = {
                Bucket: aws.bucketName,
                Key: "chat/D2P/" + chatId + "/" + filename
            };
        }
        s3.getObject(params, (err, data) => {
            if(err) { console.log(err) };
            console.log('file downloaded successfully');
            callback(null, data)
        })
    })
}
    

   
}
