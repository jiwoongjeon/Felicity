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
            const insertSocket = "INSERT INTO connection (role, user_id, socket_id) values (?, ?, ?)";
            config.db.query(insertSocket, [role, userid, socket.id], (err, result) => {
                if (err) console.log(err);
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

    socket.on("chat", ({ userToCall, name, msg, time }) => {
        // const { name, msg, time } = data;
        io.to(userToCall).emit("chatting", {
            name,
            msg,
            time
        })
    })

    socket.on("disconnect", () => {
        console.log(`disconnected: ${socket.id}`);
        const updateDisconQry = "UPDATE connection SET disconnected_time = NOW() WHERE (socket_id = ?)"
        config.db.query(updateDisconQry, socket.id, (err, result) => {
            if (err) console.log(err);
        })
    })
})