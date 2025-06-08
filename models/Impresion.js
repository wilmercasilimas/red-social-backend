// models/Impresion.js

const mongoose = require("mongoose");

const impresionSchema = new mongoose.Schema(
  {
    publicacion: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Publicacion",
      required: true,
    },
    usuario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    tipo: {
      type: String,
      enum: ["like", "dislike", "love"],
      required: true,
    },
  },
  {
    timestamps: true, // Crea automáticamente campos createdAt y updatedAt
  }
);

const Impresion = mongoose.model("Impresion", impresionSchema);

module.exports = Impresion;
