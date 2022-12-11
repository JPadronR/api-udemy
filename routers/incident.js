const express = require("express");
const IncidentController = require("../controllers/incident");

const api = express.Router();

api.get("/helloWorld", IncidentController.helloWorld);
api.post("/createIncident", IncidentController.createIncident);
api.get("/getIncidents", IncidentController.getIncidents);
api.get("/getIncidentsBySeverity", IncidentController.getIncidentsBySeverity);
api.get("/getIncidentsByState", IncidentController.getIncidentsByState);
api.put("/updateIncident", IncidentController.updateIncident);
api.delete("/deleteIncident", IncidentController.deleteIncident);

module.exports = api;