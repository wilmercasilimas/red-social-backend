const registrarImpresion = async (req, res) => {
  try {
    const { publicacionId, tipo } = req.body;
    const usuarioId = req.body.usuarioId || "mockUserId";

    const nuevaImpresion = {
      publicacion: publicacionId,
      tipo,
      usuario: usuarioId,
      creada_en: new Date(),
    };

    res.status(201).json({
      status: "success",
      mensaje: "Impresión registrada correctamente",
      impresion: nuevaImpresion,
    });
  } catch (error) {
    console.error("Error al registrar impresión:", error);
    res.status(500).json({
      status: "error",
      mensaje: "Error al registrar impresión",
    });
  }
};

module.exports = registrarImpresion;