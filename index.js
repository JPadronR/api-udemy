const port = process.env.PORT || 3000;
const app = require("./app");
const mongoose = require("mongoose")
const urlMongoDB = "mongodb+srv://admin:pass1@api-res.huwmnb2.mongodb.net/apidb"


mongoose.connect(urlMongoDB,(err, res) => {
    try {
        if(err)
        {
            throw err;
        } else
        {
            console.log("CONEXION EXITOSA");
            
            app.listen(port, () => {
                console.log("Server running at http://localhost:" + port);
            })
        }

    } catch (error){
        console.log(error);
    }
})