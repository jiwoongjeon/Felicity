const express = require("express");
const cors = require("cors");
const config = require("./config")

const app = express();
app.use(cors());
app.use(express.json());


app.use(require("./posts/router"));
app.use(require("./schedules/router"));

// const port = 3001;
app.listen(config.express.port, () => {
    console.log(`Server running on Port ${config.express.port}`);
});

