var router = require("express").Router();
var docnotes = require("./doctornote_model");
 
//When the doctor edits the doctor note during the video call.
function editDocNotes (req, res) {
    const rid = req.body.reservation_id
    const special_note = req.body.special_note
 
    docnotes.editDocNotes(special_note, rid, (err, result) => {
        if (err) {
            console.log(err);
            res.json({ errMsg : "Error: Failed to edit the doctor's notes"})
        } else{
           
            res.json({ msg: "Successfully edited the doctor's notes"})
        } 
    })
   
}

//When the doctor notes is displayed
function readDocNotes (req, res) {
    const rid = req.body.reservation_id
    docnotes.readDocNotes(rid, (err, result) => {
        if (err) {
            console.log(err);
            res.json({ errMsg : "Error: Failed to display the doctor's notes"})
        } else{
            if (result.length != 0) {
                res.json(result)
            }
            else {
                res.json({ msg : "Doctor's note is empty"})
            }
        }
    })
}
 
router.post("/Doctor/videocall/docnotes", editDocNotes);
router.post("/readDocNotes", readDocNotes);
module.exports = router;
