const { request } = require("../app");
const Incident = require("../models/incident");


function helloWorld(req,res){
    console.log("Hola Barrio Loco");
}

async function createIncident(req, res)
{
    const incident = new Incident();
    const param = req.body;

    incident.title = param.title;
    incident.description = param.description;
    incident.user = param.user;
    incident.severity = param.severity;

    try {
        const incidentStore = await incident.save();

        if(!incidentStore)
        {
            res.status(400).send({msg: "No se ha guardado la incidencia"});
        } else
        {
            res.status(200).send({inciden: incidentStore});
        }

    } catch (error) {
        res.status(500).send(error);
    }
}

async function getIncidents(req, res)
{
    try {
        const incidents = await Incident.find().sort({created_At: 1});

        if(!incidents)
        {
            res.status(400).send({msg: "No se pudo obtener la incidencia"});
        } else
        {
            res.status(200).send(incidents);
        }

    } catch (error) {
        res.status(500).send(error);
    }
}

async function getIncidentsBySeverity(req, res)
{
    const params = req.query;
    const severity = params.severity;

    try {
        const incidents = await Incident.find({severity: severity}).sort({created_At: 1});

        if(!incidents)
        {
            res.status(400).send({msg: "Error al obtener incidencias"});
        } else
        {
            res.status(200).send(incidents);
        }


    } catch (error) {
        res.status(500).send(error);
    }
}

async function getIncidentsByState(req, res)
{
    const params = req.query;
    const completed = params.completed;

    try {
        const incidents = await Incident.find({completed: completed}).sort({created_At: 1});

        if(!incidents)
        {
            res.status(400).send({msg: "Error al obtener incidencias"});
        } else
        {
            res.status(200).send(incidents);
        }

    } catch (error) {
        res.status(500).send(error);
    }
}

async function updateIncident(req, res)
{
    const params = req.body;
    const idIncident = params.id;

    try {
        const incident = await Incident.findByIdAndUpdate(idIncident, params);

        if(!incident)
        {
            res.status(400).send({msg: "No se ha podido actualizar la incidencia"});
        } else
        {
            res.status(200).send({msg: "Actualizacion realizada con exito"});
        }

    } catch (error) {
        res.status(500).send(error);
    }
}

async function deleteIncident(req, res)
{
    const params = req.body;
    const idIncident = params.id;

    try {
        const incident = await Incident.findByIdAndDelete(idIncident);

        if(!incident)
        {
            req.status(400).send("No se pudo eliminar la incidencia");
        } else
        {
            res.status(200).send({msg: "Incidencia eliminada con exito"});
        }

    } catch (error) {
        res.status(500).send(error);
    }
}


module.exports = {
    helloWorld,
    createIncident,
    getIncidents,
    getIncidentsBySeverity,
    getIncidentsByState,
    updateIncident,
    deleteIncident
}