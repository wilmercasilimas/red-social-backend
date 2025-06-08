const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3900;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("✅ Conectado a MongoDB"))
  .catch((error) => console.error("Error al conectar a MongoDB:", error));

const impresionRoutes = require("./routes/impresiones");
app.use("/api/impresion", impresionRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});