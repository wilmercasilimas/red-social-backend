const express = require("express");
const router = express.Router();
const registrarImpresion = require("../controllers/impresiones");

router.post("/registrar", (req, res) => registrarImpresion(req, res));

module.exports = router;