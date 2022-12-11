const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const incidentSchema = Schema({
    title:{
        type: String,
        require: true
    },
    description:{
        type: String,
        require: true
    },
    user:{
        type: String,
        require: true
    },
    severity:{
        type: String,
        require: true
    },
    completed:{
        type: Boolean,
        require: true,
        default: false
    },
    create_At:{
        type: Date,
        require: true,
        default: Date.now 
    }
})

module.exports = mongoose.model("Incident", incidentSchema);