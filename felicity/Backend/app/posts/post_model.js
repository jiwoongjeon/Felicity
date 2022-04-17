const config = require("../config");
var post = module.exports;

const readPostQry =
    "SELECT post.id, symptom.id as sid, symptom.category, post.title, post.content, " +
    "date_format((symptom.created_time), '%Y/%m/%d %l:%i %p') as date, " +
    "post.is_replied as state, post.comment from post " +
    "join symptom on post.symptom_id = symptom.id";

const readSymptomList =
    "select * from symptom_list where symptom_list.symptom_id in (?)";

post.findPosts = function findPosts(callback) {
    config.db.query(readPostQry, (err, result) => {
        if (err) callback(err, null);

        callback(null, result);
    })
}

post.findSymptoms = function findSymptoms(symptomIds, callback) {
    var idString = symptomIds.join(', ');
    config.db.query(readSymptomList, idString, (err, result) => {
        if (err) callback(err, null);

        callback(null, result)
    })
}