const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

module.exports = app;

const incident_routers = require("./routers/incident");

app.use("/api", incident_routers);