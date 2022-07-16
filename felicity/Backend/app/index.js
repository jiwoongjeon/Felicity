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
        // console.log(dataURL)
        socket.emit("result", result)
    })

    socket.on("send-transcription", ({ userToCall, text }) => {
        io.to(userToCall).emit("result", text)
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
        const rid = data.reservation_id;
        const socketid = socket.id;
        var otherSocketId;

        const getSocketId =
            "SELECT reservation.id, reservation.socket_id FROM reservation " +
            "JOIN connection ON connection.disconnected_time IS NULL " +
            "WHERE reservation.id = ? and reservation.socket_id = connection.socket_id";
        config.db.query(getSocketId, rid, (err, result) => {
            if (err) console.log(err);

            else {
                console.log(result);

                if (result.length == 0) {
                    const updateSocketId = "UPDATE reservation SET socket_id = ? WHERE (id = ?)"
                    config.db.query(updateSocketId, [socketid, rid], (err, result) => {
                        if (err) console.log(err);
                    })
                    socket.emit("me", ({ socketid, otherSocketId: null }))
                    console.log("Updated reservation table")
                }
                else {
                    otherSocketId = result[0].socket_id
                    socket.emit("me", ({ socketid, otherSocketId }))
                    io.to(otherSocketId).emit("room-entered", ({ socketid: socketid }))
                    console.log("Sent socket id")
                }
            }
        })
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