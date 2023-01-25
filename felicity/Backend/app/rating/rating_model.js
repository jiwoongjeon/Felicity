const config = require("../config");
var rating = module.exports;

const readRating = "INSERT INTO felicity.rating VALUE (? ,?, ?, ?, ?, ?, DEFAULT)"

rating.addNewRating = function addNewRating(data, callback){
    config.db.query(readRating, data, (err, result) => {
        if(err) callback(err,null);
        callback(null, result);
    });
}