const config = require("../config");
var post = module.exports;

const getPageQry = "SELECT count(*) AS pages FROM post";

const getPageCategoryQry = "SELECT count(*) AS pages FROM post WHERE category = ?";

const readPostQry =
    "SELECT post.id, symptom.id AS sid, post.category, post.title, post.content, " +
    "date_format((symptom.created_time), '%Y/%m/%d %l:%i %p') AS date, " +
    "post.is_replied AS state FROM post " +
    "JOIN symptom ON post.symptom_id = symptom.id ORDER BY symptom_id DESC LIMIT ?, 5";

const readPostCategoryQry =
    "SELECT post.id, symptom.id AS sid, post.category, post.title, post.content, " +
    "date_format((symptom.created_time), '%Y/%m/%d %l:%i %p') AS date, " +
    "post.is_replied AS state FROM post " +
    "JOIN symptom ON post.symptom_id = symptom.id " +
    "WHERE post.category = ? " + 
    "ORDER BY symptom_id DESC LIMIT ?, 5";

const readSymptomList =
    "SELECT * FROM symptom_list WHERE symptom_list.symptom_id IN (";

const readPostCommentQry = 
    "SELECT id, post_id, role, user_id, time, comment " + 
    "FROM post_comment WHERE post_id = ?"

const insertPostQry =
    "INSERT INTO felicity.post " +
    "(`symptom_id`, `patient_id`, `title`, `content`, `is_replied`, `category`) " +
    "VALUES (?, ?, ?, ?, ?, ?)"

const insertSymptomQry =
    "INSERT INTO felicity.symptom " +
    "(`patient_id`, `wounded_area`, `preferred_department`, `injured_time`, `severity`, `reason`) " +
    "VALUES (?, ?, ?, ?, ?, ?)"

const insertSymptomListQry =
    "INSERT INTO felicity.symptom_list (`symptom_id`, `cough`, `vomit`, `fever`, " +
    "`sore_throat`, `phlegm`, `runny_nose`, `nauseous`, `out_of_breath`, `stomachache`, " +
    "`chills`, `muscle_sickness`, `other`)" +
    "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"

const insertCommentQry = 
    // "UPDATE felicity.post SET `doctor_id` = ?, `comment` = ?, is_replied = 1 WHERE (`id` = ?);"
    "INSERT INTO felicity.post_comment " + 
    "(post_id, role, user_id, comment) VALUES " +
    "(?, ?, ?, ?)";

const updateIsRepliedQry = 
    "UPDATE felicity.post SET is_replied = 1 WHERE id = ?"

post.getPageNum = function getPageNum(callback) {
    config.db.query(getPageQry, (err, result) => {
        if (err) callback(err, null);

        callback(null, result);
    });
};

post.getPageCategoryNum = function getPageCategoryNum(category, callback) {
    config.db.query(getPageCategoryQry, category, (err, result) => {
        if (err) callback(err, null);

        callback(null, result);
    });
};

post.findPosts = function findPosts(targetPage, callback) {
    const targetIndex = (targetPage-1)*5
    config.db.query(readPostQry, targetIndex, (err, result) => {
        if (err) callback(err, null);

        callback(null, result);
    })
}

post.findPostsCategory = function findPostsCategory(targetPage, category, callback) {
    const targetIndex = (targetPage-1)*5
    config.db.query(readPostCategoryQry, [category, targetIndex], (err, result) => {
        if (err) callback(err, null);

        callback(null, result);
    })
}

post.findSymptoms = function findSymptoms(symptomIds, callback) {
    var idString = symptomIds.join(', ');
    config.db.query(readSymptomList + idString + ")", (err, result) => {
        if (err) callback(err, null);

        callback(null, result)
    })
}

post.readPostComment = function readPostComment(postId, callback) {
    config.db.query(readPostCommentQry, postId, (err, result) => {
        if (err) callback(err, null);

        callback(null, result);
    })
}

post.insertPost = function insertPost(sid, data, callback) {
    const postList = [sid, data.MHT.patientId, data.title, data.context, 0, data.category];
    config.db.query(insertPostQry, postList, (err, result) => {
        if (err) callback(err, null);

        callback(null, result);
    })
}

post.insertSymptom = function insertSymptom(data, callback) {
    // console.log(data)
    const symptomList = [data.patientId, data.hurt, data.department, data.time, data.level, data.why]
    // console.log(symptomList)
    config.db.query(insertSymptomQry, symptomList, (err, result) => {
        if (err) callback(err, null);

        callback(null, result);
    })
}

post.insertSymptomList = function insertSymptomList(sid, data, callback) {
    const symptomList = [sid, data[0], data[1], data[2], data[3], data[4], data[5], data[6], data[7], data[8], data[9], data[10], data[12]];
    // console.log()
    config.db.query(insertSymptomListQry, symptomList, (err, result) => {
        if (err) callback(err, null);

        callback(null, result);
    })
}

post.insertComment = function insertComment(postId, role, userId, comment, callback) {
    config.db.query(insertCommentQry, [postId, role, userId, comment], (err, result) => {
        if (err) callback(err, null);

        callback(null, result);
    })
}

post.updateIsReplied = function updateIsReplied(postId, callback) {
    config.db.query(updateIsRepliedQry, postId, (err, result) => {
        if (err) callback(err, null);

        callback(null, result);
    })
}