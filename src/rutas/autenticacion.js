// Importamos el módulo express, que nos permite crear un servidor web y un router.
const express = require("express");

// Creamos un nuevo router usando express.Router().
const rutasAuth = express.Router();

// Importamos las funciones y datos que necesitamos de nuestro módulo de usuarios.
const { addUsuario, usuarios, obtenerUsuario } = require("../usuarios");

// Definimos una ruta GET para "/usuarios" que devuelve todos los usuarios.
rutasAuth.get("/usuarios", (req, res) => {
  res.status(200).json(usuarios);
});

// Definimos una ruta POST para "/registrar" que registra un nuevo usuario.
rutasAuth.post("/registrar", (req, res) => {
  // Verificamos que las contraseñas coincidan.
  if (req.body.contrasena !== req.body.confirmarContrasena) {
    res.status(400).send("Las contraseñas no coinciden.");
    return;
  }

  // Verificamos que la contraseña tenga al menos 8 caracteres.
  if (req.body.contrasena.length < 8) {
    res.status(400).send("La contraseña debe tener al menos 8 caracteres.");
    return;
  }

  // Agregamos el nuevo usuario.
  addUsuario(req.body);

  // Respondemos con un mensaje de éxito.
  res.json({
    message: "Usuario registrado exitosamente.",
  });
});

// Definimos una ruta POST para "/login" que maneja el inicio de sesión de los usuarios.
rutasAuth.post("/login", (req, res) => {
  // Verificamos si el usuario existe.
  const usuarioExiste = obtenerUsuario(req.body.code);

  // Si el usuario no existe, respondemos con un error.
  if (!usuarioExiste) {
    res.status(404).json({
      message: "Usuario no encontrado.",
      success: false,
    });
    return;
  }

  // Si la contraseña es incorrecta, respondemos con un error.
  if (usuarioExiste.contrasena !== req.body.contrasena) {
    res.status(400).json({
      message: "Contraseña incorrecta.",
      success: false,
    });
    return;
  }

  // Si todo está bien, respondemos con un mensaje de éxito.
  res.status(200).json({
    message: "Inicio de sesión exitoso.",
    success: true,
  });
});

// Exportamos nuestro router para que pueda ser utilizado en otros archivos.
module.exports = rutasAuth;
