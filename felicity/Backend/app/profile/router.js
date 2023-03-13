var profile = require("./profile_model");
var router = require("express").Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const storage = multer.diskStorage({
    destination: path.join("./profile_images"), // callBack(null, 'uploads/');
    filename: function(req, file, callBack) {
        callBack(null, file.originalname);
    }
});

const upload = multer({
    storage: storage
}).single("file");

function getProfileImagePath(req, res) {
    const role = req.body.role;
    const id = req.body.id;
    if (role) {
        profile.findPatientProfileImagePath(id, (err, result) => {
            if (err) {
                console.log(err);
                res.json({ errMsg: "Error: Failed on getting path." })
            }
            else {
                res.json({ image_path: result[i].profile_image });
            }
        });
    }
    else {
        profile.findDoctorProfileImagePath(id, (err, result) => {
            if (err) {
                console.log(err);
                res.json({ errMsg: "Error: Failed on getting path." })
            }
            else {
                res.json({ image_path: result[i].profile_image });
            }
        });
    }
}

function postProfileImagePath(req, res) {
    const role = req.body.role;
    const id = req.body.id;
    const file = req.body.file_name;
    if (role) {
        profile.insertPatientProfileImagePath(id, file, (err, result) => {
            if (err) {
                console.log(err);
                res.json({ errMsg: "Error: Failed on creating path" });
            }
        });
    }
    else {
        profile.insertDoctorProfileImagePath(id, file, (err, result) => {
            if (err) {
                console.log(err);
                res.json({ errMsg: "Error: Failed on creating path" });
            }
        });
    }
}

function updateUnderlyingDisease(req, res){
    const patientId = req.body.patientId;
    const underDisease = req.body.underlyingDisease;

    profile.updateUnderlyingDisease(patientId, underDisease, (err, result) => {
        if (err){
            console.log(err);
            res.json({ errMsg: "Error: Failed on updating underlting disease"});
        }
        else {res.json(result);}
    })

}

function updatePatientPreferredLang(req, res){
    const patientId = req.body.patientId;
    const lang = req.body.preferredLang;

    profile.updatePatientPreferredLang(patientId, lang, (err, result) => {
        if (err){
            console.log(err);
            res.json({ errMsg: "Error: Failed on updating preferred language"});
        }
        else {res.json(result);}
    })
}

function updateDoctorPreferredLang(req, res){
    const doctorId = req.body.doctorId;
    const lang = req.body.preferredLang;

    profile.updateDoctorPreferredLang(doctorId, lang, (err, result) => {
        if (err){
            console.log(err);
            res.json({ errMsg: "Error: Failed on updating preferred language"});
        }
        else {res.json(result);}
    })
}

function updateProfession(req, res){
    const doctorId = req.body.doctorId;
    const profession = req.body.profession;

    profile.updateProfession(doctorId, profession, (err, result) => {
        if (err){
            console.log(err);
            res.json({ errMsg: "Error: Failed on updating profession"});
        }
        else {res.json(result);}
    })
}

function updateEducation(req, res){
    const doctorId = req.body.doctorId;
    const education = req.body.education;

    profile.updateEducation(doctorId, education, (err, result) => {
        if (err){
            console.log(err);
            res.json({ errMsg: "Error: Failed on updating education"});
        }
        else {res.json(result);}
    })
}
function updateAvailableTime(req, res){
    const doctorId = req.body.doctorId;
    const timeA = req.body.timeA;
    const timeB = req.body.timeB;

    profile.updateAvailableTime(doctorId, timeA, timeB, (err, result) => {
        if (err){
            console.log(err);
            res.json({ errMsg: "Error: Failed on updating available time"});
        }
        else {res.json(result);}
    })
}

router.post("/updateUnderlyingDisease", updateUnderlyingDisease);
router.post("/updatePatientPreferredLang", updatePatientPreferredLang);
router.post("/updateDoctorPreferredLang", updateDoctorPreferredLang);
router.post("/updateProfession", updateProfession);
router.post("/updateEducation", updateEducation);
router.post("/updateAvailableTime", updateAvailableTime);

router.post("/doctor_conv", getProfileImagePath);
router.post("/post_profile_image_path", postProfileImagePath);
router.post("/post_profile_image", (req, res) => {
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
router.post("/remove_profile_image", (req, res) => {
    const n = req.body.n;
    const role = req.body.role;
    const id = req.body.id;
    if (n === 0) { // n === 0: clicked delete button, not changing
        if (role) {
            profile.deletePatientProfileImagePath(id, (err, result) => {
                if (err) {
                    console.log(err);
                    res.json({ errMsg: "Error: Failed on creating path" });
                }
            });
        }
        else {
            profile.deleteDoctorProfileImagePath(id, (err, result) => {
                if (err) {
                    console.log(err);
                    res.json({ errMsg: "Error: Failed on creating path" });
                }
            });
        }
    }
    fs.unlink("./profile_images/" + req.body.file_name, (err) => {
        if (err) {
            throw err;
        }
        console.log("Delete file successfully")
    })
})



module.exports = router;