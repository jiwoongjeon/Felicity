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

const login = require("./login.js")
const schedule = require("./schedule.js")

app.get("/audio", (req, res) => {
    console.log(req.body);
});

// const port = 3001;
const server = app.listen(config.express.port, () => {
    console.log(`Server running on Port ${config.express.port}`);
});

//login using jwt
//doctor login
app.post('/dlogin', (req, res) => {
    const email = req.body.email
    const password = req.body.password
    const result = login.docLogin([email, password])
    res.json({accessToken:result[1], doctorID:result[0]})
})

//patient login
app.post('/plogin', (req, res) => {
    const email = req.body.email
    const password = req.body.password
    const result = login.paLogin([email, password])
    res.json({accessToken:result[1], doctorID:result[0]})
})

//schedule
app.get("/patient_schedule", (req, res) => {
    const patient_id = req.body.patient_id
    var scheduleQuery = "SELECT reservation.patient_id as patient_id," + " reservation.doctor_id as doctor_id, " +
    "doctor_profile.firstname as doctor_firstName," + " doctor_profile.lastname as doctor_lastName, " +
    "date_format((reserved_date), '%m-%d-%Y') as reserved_date, " +
    "date_format((reserved_date), '%l:%i %p') as reserved_time " +
    "FROM felicity.reservation JOIN doctor_profile ON " + "reservation.doctor_id = doctor_profile.doctor_id and patient_id = "
    config.db.query(scheduleQuery + patient_id, (err, result) => {
        if (err) console.log(err);
        console.log(result);
        res.json(result)            
    })
})

app.get("/doctor_schedule", (req, res) => {
    const doctor_id = req.body.doctor_id
    var scheduleQuery = "SELECT reservation.patient_id as patient_id, reservation.doctor_id as doctor_id," +
    "patient_profile.firstname as patient_firstName, patient_profile.lastname as patient_lastName, " +
    "date_format((reserved_date), '%m-%d-%Y') as reserved_date, " +
    "date_format((reserved_date), '%l:%i %p') as reserved_time " +
    "FROM felicity.reservation JOIN patient_profile ON reservation.patient_id = patient_profile.patient_id and doctor_id = "
    config.db.query(scheduleQuery + doctor_id, (err, result) => {
        if (err) console.log(err);
        console.log(result);
        res.json(result)
    })
})


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