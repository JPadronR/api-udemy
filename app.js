const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

module.exports = app;

const incident_routers = require("./routers/incident");

app.use("/api", incident_routers);