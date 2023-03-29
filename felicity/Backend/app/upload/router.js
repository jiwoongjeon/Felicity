var router = require("express").Router();
var awsFile = require("./upload_model")
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/upload', upload.single('file'), (req, res) => {
    const userType = req.body.userType;
    const userId = req.body.userId;
    const fileFormat = req.file.originalname.split(".")[1];
    
    
    //if a doctor uploads the profile img
     if (userType == 1) {
        awsFile.uploadFile( "doctor", userId, fileFormat, req.file.buffer)
     }
    
    //if a patient uploads the profile img
    else if (userType == 2) {
        awsFile.uploadFile( "patient", userId , fileFormat, req.file.buffer)
    }
    if (!req.file) {
        return res.status(400).send('No file was uploaded.');
    }
    
    res.send('File received successfully.');
});


function profileDownload(req, res) {
    console.log(req.body)
    const userType = req.body.userType
    const userId = req.body.userId
    const fileFormatJPG = "JPG"
    const fileFormatPNG = "PNG"

    awsFile.downloadFile(userType, userId, fileFormatJPG , fileFormatPNG, (err, file) => {
        console.log(file)
        if (err) {
            console.log(err)
            res.send({ errMsg: "Error on downloading file" })
        }
        else {
            res.send(file)
        }
    })
    
}

router.post('/downloadFile', profileDownload);
module.exports = router;