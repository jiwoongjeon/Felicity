const express = require("express");
const cors = require("cors");
const config = require("./config")
const socket = require("socket.io");
const transcribe = require("../stt");
const conn = require("./connection/connection")
const videocall = require("./videocall/videocall")

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
app.use(require("./status/router"));        // "dstatus" or "pstatus"
app.use(require("./conv/router"));

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
        socket.emit("result", result)
    })

    socket.on("send-transcription", ({ userToCall, text }) => {
        io.to(userToCall).emit("result", text)
    })

    socket.on("reconnection", (data) => {
        console.log(socket.id, data, data[0], data[1])
        if (data[1] == "false") {
            conn.doctorReconnection(socket, data[0], (err, result) => {
                if (err) console.log(err);
            })
        }
        else {
            conn.patientReconnection(socket, data[0], (err, result) => {
                if (err) console.log(err);
            })
        }
    })

    console.log(socket.id);

    socket.on("login", (data) => {
        console.log(data);
        const userid = data[0];
        const role = data[1];

        if (!role) {
            conn.socketDoctorLogin(userid, socket, io, (err, result) => {
                if (err) console.log(err);
            })
        }
        else {
            conn.socketPatientLogin(userid, socket, io, (err, result) => {
                if (err) console.log(err);
            })
        }
    })

    socket.on("start", (data) => {
        const rid = data.reservation_id;
        const role = data.role;

        // When doctor enters the room
        if (!role) {
            videocall.doctorEnterRoom(rid, (error, result) => {
                if (error) console.log(error);
            })
            videocall.checkPatientInRoom(rid, io, socket, (error, result) => {
                if (error) console.log(error);
            })
        }
        else {
            videocall.patientEnterRoom(rid, (error, result) => {
                if (error) console.log(error);
            })
            videocall.checkDoctorInRoom(rid, io, socket, (error, result) => {
                if (error) console.log(error);
            })
        }

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
        conn.doctorDisconnection(socket, (err, result) => {
            if (err) console.log(err);
            else console.log(result);
        })
        conn.patientDisconnection(socket, (err, result) => {
            if (err) console.log(err);
            else console.log(result);
        })
    })
})