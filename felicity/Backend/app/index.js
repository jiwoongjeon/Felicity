const express = require("express");
const cors = require("cors");
const config = require("./config")
const socket = require("socket.io");
const transcribe = require("../stt");

const app = express();
app.use(cors());
app.use(express.json());



var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());



app.use(require("./doctorlogin/router"));   // "/dlogin"
app.use(require("./patientlogin/router"));  // "/plogin"
app.use(require("./posts/router"));         // "/post"
app.use(require("./schedule/router"));      // "/patient_schedule" or "/doctor_schedule"

// const login = require("./login.js")

app.get("/", (req, res) => {
    res.send('Health Check');
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
    res.json({ accessToken: result[1], doctorID: result[0] })
})

//patient login
app.post('/plogin', (req, res) => {
    const email = req.body.email
    const password = req.body.password
    const result = login.paLogin([email, password])
    res.json({ accessToken: result[1], doctorID: result[0] })
})

app.post("/reservation", (req, res) => {
    const patient_id = req.body.patient_id
    const doctor_id = req.body.doctor_id
    const wounded_area = req.body.wounded_area
    const preferred_department = req.body.preferred_department
    const injured_time = req.body.injured_time
    const severity = req.body.severity
    const cough = req.body.cough
    const vomit = req.body.vomit
    const fever = req.body.fever
    const sore_throat = req.body.sore_throat
    const runny_nose = req.body.runny_nose
    const phlegm = req.body.phlegm
    const nauseous = req.body.nauseous
    const out_of_breath = req.body.out_of_breath
    const stomachache = req.body.stomachache
    const chills = req.body.chills
    const muscle_sickness = req.body.muscle_sickness
    const other = req.body.other
    const reservation_date = req.body.reservation_date
    const reason = req.body.reason
    const socket_id = req.body.socket_id
    const created_date = req.body.created_date
    // var reservationQuery1 = "INSERT INTO felicity.symptom('patient_id', 'wounded_area', 'preferred_department', 'injured_time', 'severity', 'reason', 'created_time' ) " + 
    // "VALUES (" + patient_id + ", " + wounded_area + ", " + preferred_department + ", " + injured_time + ", " + severity + ", " + reason + ", " + created_date + "); "
    var reservationQuery1 = "INSERT INTO felicity.symptom (patient_id, wounded_area, preferred_department, injured_time, severity, reason, created_time ) VALUES (?, ?, ?, ?, ?, ?, ?);"
    // var reservationQuery2 = "INSERT INTO felicity.reservation (symptom_id, patient_id, doctor_id, reserved_date, created_date, socket_id) " + 
    // "SELECT id, " + patient_id + ", " + doctor_id + ", " + reservation_date + ", " + created_date + ", " + socket_id + " "
    // "FROM symptom ORDER BY id DESC LIMIT 1; "
    var reservationQuery2 = "INSERT INTO felicity.reservation (symptom_id, patient_id, doctor_id, reserved_date, created_date, socket_id) SELECT id, ?, ?, ?, ?, ? FROM symptom ORDER BY id DESC LIMIT 1;"
    // var reservationQuery3 = "INSERT INTO felicity.symptom_list (symptom_id, cough, vomit, fever, sore_throat, runny_nose, phlegm, nauseous, out_of_breath, stomachache, chills, muscle_sickness, other) " + 
    // "SELECT id, " + cough + ", " + vomit + ", " + fever + ", " + sore_throat + ", " + runny_nose + ", " + phlegm + ", " + nauseous + ", " + out_of_breath + ", " + stomachache + ", " +
    // chills + ", " + muscle_sickness + ", " + other + " " +
    // "FROM symptom ORDER BY id DESC LIMIT 1;"
    // var reservationQuery = "BEGIN; INSERT INTO felicity.symptom (patient_id, wounded_area, preferred_department, injured_time, severity, reason, created_time ) VALUES (6, 'dd', 'vkdeiv', '2020-12-33', 'yye', 'reason', 'created_time'); INSERT INTO felicity.reservation (symptom_id, patient_id, doctor_id, reserved_date, created_date, socket_id) SELECT id, 6, 7, '2022-12-04', '2022-12-04', 19231 FROM symptom ORDER BY id DESC LIMIT 1; INSERT INTO felicity.symptom_list (symptom_id, cough, vomit, fever, sore_throat, runny_nose, phlegm, nauseous, out_of_breath, stomachache, chills, muscle_sickness, other) SELECT id, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 'others' FROM symptom ORDER BY id DESC LIMIT 1; COMMIT;"
    var reservationQuery3 = "INSERT INTO felicity.symptom_list (symptom_id, cough, vomit, fever, sore_throat, runny_nose, phlegm, nauseous, out_of_breath, stomachache, chills, muscle_sickness, other) SELECT id, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? FROM symptom ORDER BY id DESC LIMIT 1;"
    config.db.query(reservationQuery1, [patient_id, wounded_area, preferred_department, injured_time, severity, reason, created_date], (err, result) => {
        if (err) console.log(err);
        // console.log(result);
        res.json(result)
    })
    config.db.query(reservationQuery2, [patient_id, doctor_id, reservation_date, created_date, socket_id], (err, result) => {
        if (err) console.log(err);
        // console.log(result);
        // res.json(result)
    })
    config.db.query(reservationQuery3, [cough, vomit, fever, sore_throat, runny_nose, phlegm, nauseous, out_of_breath, stomachache, chills, muscle_sickness, other], (err, result) => {
        if (err) console.log(err);
        // console.log(result);
        // res.json(result)
    })
})




const io = socket(server, {
    cors: {
        origin: "*",
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



    console.log(socket.id);

    socket.on("login", (data) => {
        console.log(data);
        const userid = data[0];
        const role = data[1];

        if (userid != 0) {
            if (role) {
                const insertPatientSocket = "select felicity.insert_patient_socket(?, ?);";
                config.db.query(insertPatientSocket, [userid, socket.id], (err, result) => {
                    if (err) console.log(err);
                    console.log(result);
                });
            } else {
                const insertDoctorSocket = "select felicity.insert_doctor_socket(?, ?);";
                config.db.query(insertDoctorSocket, [userid, socket.id], (err, result) => {
                    if (err) console.log(err);
                    console.log(result);
                });
            }
        }
    })

    socket.on("start", (data) => {
        console.log(data)
        const userid = data.id;
        const role = data.role;
        const socketid = socket.id;
        var otherUserId;
        var otherSocketId;

        console.log(userid);
        console.log(role);

        if (role) {
            const getDoctorId = "SELECT reservation.doctor_id, doctor_connection.socket_id FROM felicity.reservation join doctor_connection where patient_id = ? order by connected_time desc limit 1";

            config.db.query(getDoctorId, userid, (err, result) => {
                if (err) console.log(err);

                if (result != null) {
                    otherUserId = result[0].doctor_id;
                    otherSocketId = result[0].socket_id;

                    socket.emit("me", ({ socketid, otherUserId, otherSocketId }));

                    console.log(otherSocketId);
                    console.log(socketid);
                }
                console.log(result);
            });
        } else {
            const getPatientId = "SELECT reservation.patient_id, patient_connection.socket_id FROM felicity.reservation join patient_connection where doctor_id = ? order by connected_time desc limit 1";

            config.db.query(getPatientId, userid, (err, result) => {
                if (err) console.log(err);

                if (result != null) {
                    otherUserId = result[0].doctor_id;
                    otherSocketId = result[0].socket_id;

                    console.log(otherSocketId);

                    socket.emit("me", { socketid, otherUserId, otherSocketId });
                    console.log(socketid);
                }

                console.log(result);

            });
        }

        // if (otherUserId && !otherSocketId) {

        // }
        // console.log(otherSocketId);
        // socket.emit("me", ({ socketid, otherUserId, otherSocketId }));

    });

    socket.on("disconnect", () => {
        socket.broadcast.emit("callended");
    });

    socket.on("calluser", ({ userToCall, signalData, from, someName }) => {
        io.to(userToCall).emit("calluser", { signal: signalData, from, someName });
    });

    socket.on("answercall", (data) => {
        io.to(data.to).emit("callaccepted", data.signal);
    });
})