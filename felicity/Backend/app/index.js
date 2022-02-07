const express = require("express");
const cors = require("cors");
const config = require("./config")
const socket = require("socket.io");
const transcribe = require("../stt");

const app = express();
app.use(cors());
app.use(express.json());


app.use(require("./patientLogin/router"));
app.use(require("./doctorLogin/router"));
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
    res.json({ accessToken: result[1], doctorID: result[0] })
})

//patient login
app.post('/plogin', (req, res) => {
    const email = req.body.email
    const password = req.body.password
    const result = login.paLogin([email, password])
    res.json({ accessToken: result[1], doctorID: result[0] })
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
        origin: "*",
        methods: ["GET", "POST"]
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

                otherUserId = result[0].doctor_id;
                otherSocketId = result[0].socket_id;

                socket.emit("me", ({ socketid, otherUserId, otherSocketId }));

                console.log(otherSocketId);
                console.log(socketid);

                console.log(result);
            });
        } else {
            const getPatientId = "SELECT reservation.patient_id, patient_connection.socket_id FROM felicity.reservation join patient_connection where doctor_id = ? order by connected_time desc limit 1";

            config.db.query(getPatientId, userid, (err, result) => {
                if (err) console.log(err);

                otherUserId = result[0].doctor_id;
                otherSocketId = result[0].socket_id;

                console.log(otherSocketId);

                socket.emit("me", { socketid, otherUserId, otherSocketId });
                console.log(socketid);

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

    socket.on("message-transcribe", async (file) => {
        const dataURL = file.audio.dataURL.split(",").pop();
        let fileBuffer = Buffer.from(dataURL, "base64");
        const result = await transcribe(fileBuffer);
        console.log(result);
        // console.log(dataURL);
        socket.emit("result", result);
    });
});
