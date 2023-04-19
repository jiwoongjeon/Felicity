var router = require("express").Router();
var awsFile = require("./upload_model")
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/uploadProfileFile', upload.single('file'), (req, res) => {
    const userType = req.body.userType;
    const userId = req.body.userId;
    const filename = req.file.originalname;
    
    
    //if a doctor uploads the profile img
     if (userType == 1) {
        awsFile.uploadProfileFile( "doctor", userId, filename, req.file.buffer)
     }
    
    //if a patient uploads the profile img
    else if (userType == 2) {
        awsFile.uploadProfileFile( "patient", userId , filename, req.file.buffer)
    }
    if (!req.file) {
        return res.status(400).send('No file was uploaded.');
    }
    
    res.send('File received successfully.');
});

router.post('/uploadChatFile', upload.single('file'), (req, res) => {
    const chatType = req.body.chatType;
    const chatId = req.body.chatId;
    const filename = req.file.originalname;
   
    
    
    //if a doctor uploads the file in the Doctor Chat
     if (chatType == 1) {
        awsFile.uploadChatFile( "D2D", chatId, filename, req.file.buffer)
     }
     else {
        awsFile.uploadChatFile( "D2P", chatId, filename, req.file.buffer)
     }
    
    
    if (!req.file) {
        return res.status(400).send('No file was uploaded.');
    }
    
    res.send('File received successfully.');
});

function profileDownload(req, res) {
    const userType = req.body.userType
    const userId = req.body.userId
    

    awsFile.downloadProfileFile(userType, userId, (err, file) => {
        
        if (err) {
            console.log(err)
            res.send({ errMsg: "Error on downloading file" })
        }
        else {
            res.send(file)
        }
    })
    
}
function chatFileDownload(req, res) {
    console.log(req.body)
    const chatType = req.body.chatType
    const chatId = req.body.chatId
    const filename = req.body.filename

    awsFile.downloadChatFile(chatType, chatId, filename, (err, file) => {
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

router.post('/downloadProfileFile', profileDownload);
router.post('/downloadChatFile', chatFileDownload);
module.exports = router;