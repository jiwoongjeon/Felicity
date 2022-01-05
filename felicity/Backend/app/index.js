const express = require("express");
const cors = require("cors");
const config = require("./config")
const socket = require("socket.io");
const transcribe = require("../stt");

const app = express();
app.use(cors());
app.use(express.json());


app.use(require("./patientLogin/router"));
app.use(require("./posts/router"));
app.use(require("./schedules/router"));
// 1
const plogin = require("./patientLogin/login_model")
const dlogin = require("./doctorLogin/login_model");
const jwt = require("jsonwebtoken");
require('dotenv').config({path: './app/.env'})
// const cookieParser = require('cookie-parser')
// app.use(cookieParser())
//
app.get("/audio", (req, res) => {
    console.log(req.body);
});

// const port = 3001;
const server = app.listen(config.express.port, () => {
    console.log(`Server running on Port ${config.express.port}`);
});

// 2
// require('crypto').randomBytes(64).toString('hex') --> 난수생성
Object.prototype.getByIndex = function(index) {
    return this[Object.keys(this)[index]];
  };

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return console.log(err) //res.response(403)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
        if (err) return console.log(err) //res.response(403)
        req.payload = payload
        next()
    })
}
// Athenticating using cookie
// function authenticateTokenCookie(req, res, next){
//     const accessToken = req.cookies.jwt
//     if(!accessToken){
//         return res.response(403)
//     }
//     try{
//         const payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
//         next()
//     }
//     catch(e){
//         return res.response(403)
//     }
// }

function generateAccessToken(payload){
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {algorithm: "HS256", expiresIn: '10m'})
}

app.post('/dlogin', (req, res) => {
    const email = req.body.email
    const password = req.body.password
    dlogin.doctorLogin([email, password], (err, result) => {
        if (err) console.log(err);
        // res.json(result);
        const doctorID = result[0].getByIndex(0)
        console.log(doctorID)
        const payload = {email:email}
        const accessToken = generateAccessToken(payload)
        res.json({accessToken:accessToken, doctorID:doctorID})
        //res.cookie("jwt", accessToken)
        //res.send()
    });
})

app.post('/plogin', (req, res) => {
    const email = req.body.email
    const password = req.body.password
    plogin.patientLogin([email, password], (err, result) =>{
        if (err) console.log(err);
        // res.json(result);
        const patientID = result[0].getByIndex(0)
        console.log(patientID)
        const payload = {email:eamil}
        const accessToken = generateAccessToken(payload)
        res.json({accessToken:accessToken, doctorID:doctorID})
        //res.cooke("jwt", accessToken)
        //res.send()
    })
    
})
//


const io = socket(server, {
    cors: {
        origin: "http://localhost:3000",
    },
});

io.on("connection", async socket => {
    socket.on("message-transcribe", async (file) => {
        const dataURL = file.audio.dataURL.split(",").pop()
        let fileBuffer = Buffer.from(dataURL, "base64")
        const result = await transcribe(fileBuffer)
        console.log(result)
        // console.log(dataURL)
        socket.emit("result", result)
    })
})