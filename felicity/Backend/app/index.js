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

app.get("/audio", (req, res) => {
    console.log(req.body);
});

// const port = 3001;
const server = app.listen(config.express.port, () => {
    console.log(`Server running on Port ${config.express.port}`);
});


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