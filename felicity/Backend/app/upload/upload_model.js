const AWS = require('aws-sdk');
const aws = require("./awsKeys");
var awsFile = module.exports;

AWS.config.loadFromPath(__dirname + "/awsconfig.json")

const s3 = new AWS.S3();

awsFile.uploadFile = async (userType, userId, fileFormat, file) => {
    const params = {
        Bucket: aws.bucketName,
        Key: userType + "/" + userId + "/" + userId + "." + fileFormat,
        Body: file
    };

    //to check if there is a file in the bucket
    try{
        await s3.headObject(params).promise()
        console.log("File Found in S3")
        try {
            await s3.deleteObject(params).promise()
            console.log("File deleted successfully")
            s3.upload(params, (err, data) => {
                if (err) console.log(err);
                else {
                    console.log('file upload successful')
                }
            })
        }
        catch(err) {
            console.log("ERROR in deleting file: " + JSON.stringify(err));
        }
    }
    catch(err) {
        s3.upload(params, (err, data) => {
            if (err) console.log(err);
            else {
                console.log('file upload successful')
            }
        })
    }
    
    
}

awsFile.chatFileUpload = function chatFileUpload (userType, userId, fileFormat, callback) {
    const params = {
        Bucket: aws.bucketName,
        Key: "chat/" + userType + "/" + userId + "." + fileFormat,
        Body: file
    };

    

}
awsFile.downloadFile = function downloadFile( userType, userId, fileFormatJPG, fileFormatPNG, callback) {
    const paramsJPG = {
        Bucket: aws.bucketName,
        Key: userType + "/" + userId + "/" + userId + "." + fileFormatJPG
    };
    const paramsPNG = {
        Bucket: aws.bucketName,
        Key: userType + "/" + userId + "/" + userId + "." + fileFormatPNG
    };
    try //if file format is JPG
    {
        s3.getObject(paramsJPG, (err, data) => {
            console.log('file downloaded successfully')
        })
    }
    catch(err) //if file format is PNG
    {
        s3.getObject(paramsPNG, (err, data) => {
            if (err) callback(err, null);
            else {
                callback(null, data);
            }
        })
    }
}
