const mongoose = require("mongoose");

const RecipesSchema = new mongoose.Schema({

    Npaciente: { type: Number, require: true },
    Apciente: { type: String, require: true },
    rutpaciente : { type: String, require: true },
    edadpaciente: { type: Number, require: true },
    sexopaciente: { type: String, require: true },
    medico: { type: String, require: true },
    observaciones: { type: String, require: true },
    prescripcion: { type: String, require: true },
    
});

module.exports = mongoose.model("Recipes", RecipesSchema);