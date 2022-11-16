const config = require("../config");
var docnotes = module.exports;

const editNewDocNotesQry = 
"UPDATE felicity.med_record SET special_note = ? WHERE patient_id = ? AND doctor_id = ?";

//노트만 업데이트

docnotes.postDocNotes = function postDocNotes(special_note, patient_id, doctor_id, callback) {
    config.db.query(editNewDocNotesQry, [special_note, patient_id, doctor_id], (err, result) =>{
        if (err) callback(err, null); 
        callback(null, result);
    })
}