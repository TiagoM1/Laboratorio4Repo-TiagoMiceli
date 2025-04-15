const express = require("express");
const mongoose = require("mongoose");

const createServer = (options) => {
  const app = express();

  // Middleware para parsear JSON
  app.use(express.json());

  // 3. Conexión a MongoDB
  mongoose
    .connect(options.mongoUrl)
    .then(() => console.log("Conectado a MongoDB"))
    .catch((err) => console.error("Error de conexión:", err));

  // 4. Definimos el modelo de datos
  const usuarioSchema = new mongoose.Schema({
    nombre: String,
    edad: Number,
    email: String,
  });

  const Usuario = mongoose.model("Usuario", usuarioSchema);

  // 5. Ruta GET /usuarios
  app.get("/usuarios", async (req, res) => {
    try {
      const usuarios = await Usuario.find();
      res.json(usuarios);
    } catch (err) {
      res.status(500).json({ error: "Error al obtener los usuarios" });
    }
  });

  // 6. Ruta POST /usuarios
  app.post("/usuarios", async (req, res) => {
    try {
      const nuevoUsuario = new Usuario(req.body);
      const usuarioGuardado = await nuevoUsuario.save();
      res.status(201).json(usuarioGuardado);
    } catch (err) {
      console.error("Error al guardar:", err);
      res
        .status(400)
        .json({ error: "Error al guardar el usuario", detalle: err.message });
    }
  });

  app.listen(options.port, () => {
    console.log("escuchando en el puerto: ", options.port);
  });
};

module.exports = {
  createServer,
};
