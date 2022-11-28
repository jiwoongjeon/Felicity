var router = require("express").Router();
var docnotes = require("./doctornote_model");

//Frontend 에서 req 받아오는 형식 {patient_id:, doctor_id:, special_note:}
function editDocNote (req, res) {
    const pid = req.body.patient_id 
    const did = req.body.doctor_id
    const special_note = req.body.special_note
    

    docnotes.postDocNotes(special_note, pid, did, (err, result) => {
        if (err) {
            console.log(err);
            res.json({ errMsg : "Error: Failed to save the notes"})
        } else{
            
            console.log("Doctor Notes successfully saved");
        }
        
    })
    
}

router.post("/Doctor/videocall/docnote", editDocNote);
module.exports = router;