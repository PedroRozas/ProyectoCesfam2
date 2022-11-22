const mongoose = require("mongoose");

const MedsSchema = new mongoose.Schema({
  codigo: { type: Number, require: true , unique: true},
  nombre: { type: String, require: true },
  fabricante: { type: String, require: true },
  tipo: { type: String, require: true },
  cantidad: { type: Number, require: true },
  dosis: { type: String, require: true },
  bioequivalente: { type: String, require: true },

});

module.exports = mongoose.model("Meds", MedsSchema);
