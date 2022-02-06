const plogin = require("./patientLogin/login_model");
const dlogin = require("./doctorLogin/login_model");
const auth = require("./authentication.js");

let doctorID = -1
let patientID = -1
let accessToken = null


Object.prototype.getByIndex = function (index) {
    return this[Object.keys(this)[index]];
};

function docLogin([email, password]) {
    dlogin.doctorLogin([email, password], (err, result) => {
        if (err) console.log(err);
        // res.json(result);
        doctorID = result[0].getByIndex(0)
        const payload = { email: email }
        accessToken = auth.generateAccessToken(payload)
        //res.cookie("jwt", accessToken)
        //res.send()
    });
    return [doctorID, accessToken]
}

function paLogin([email, password]) {
    plogin.patientLogin([email, password], (err, result) => {
        if (err) console.log(err);
        // res.json(result);
        patientID = result[0].getByIndex(0)
        const payload = { email: email }
        accessToken = auth.generateAccessToken(payload)
        res.json({ accessToken: accessToken, doctorID: doctorID })
        //res.cookie("jwt", accessToken)
        //res.send()
    });
    return [patientID, accessToken]
}


exports.docLogin = docLogin;
exports.paLogin = paLogin;