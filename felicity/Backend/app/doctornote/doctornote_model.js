const config = require("../config");
var docnotes = module.exports;
 
 
const editDocNotesQry =
"UPDATE felicity.med_record SET special_note = ? WHERE reservation_id = ?";

const readDocNotesQry = 
"SELECT special_note FROM felicity.med_record WHERE reservation_id = ?";
 
 
docnotes.editDocNotes = function editDocNotes(special_note, reservation_id, callback) {
    config.db.query(editDocNotesQry, [special_note, reservation_id], (err, result) =>{
        if (err) callback(err, null);
        callback(null, result);
    })
}

docnotes.readDocNotes = function readDocNotes(reservation_id, callback) {
    config.db.query(readDocNotesQry, reservation_id, (err, result) =>{
        if (err) callback(err, null);
        callback(null, result);
    })
}