const mongoose = require("mongoose");

const MedsSchema = new mongoose.Schema({
  codigo: { type: Number, require: true , unique: true},
  descp: { type: String, require: true },
  fabricante: { type: String, require: true },
  tipo: { type: String, require: true },
  componentes: { type: String, require: true },
  contenido: { type: String, require: true },
  cantidad: { type: Number, require: true },
  gramaje: { type: String, require: true },
  formato: { type: String, require: true }

});

module.exports = mongoose.model("Meds", MedsSchema);
