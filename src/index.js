//! AGREGUÉ NODEMON EN LAS DEPENDENCIAS Y EN EL COMANDO START, ESTE ES PARA
//! NO TENER QUE VOLVER A EJECUTAR "npm start" con cada cambio.

// Importamos el módulo express, que nos permite crear un servidor web.
const express = require("express");

// Importamos el módulo body-parser, que nos permite parsear el cuerpo de las solicitudes HTTP.
const bodyParser = require("body-parser");

// Importamos nuestras rutas de autenticación, que definimos en otro archivo. (rutas/autenticacion.js)
const rutasAuth = require("./rutas/autenticacion");

// Creamos una nueva aplicación Express.
const app = new express();

// Usamos el middleware bodyParser.json para parsear el cuerpo de las solicitudes HTTP en formato JSON.
app.use(bodyParser.json());

// Montamos nuestras rutas de autenticación en la ruta "/auth".
// Esto significa que todas las rutas definidas en rutasAuth estarán prefijadas con "/auth".
app.use("/auth", rutasAuth);

// Hacemos que nuestra aplicación escuche en el puerto 3000.
// Esto significa que nuestro servidor estará esperando conexiones en el puerto 3000.
app.listen(3000, () => {
  // Imprimimos un mensaje en la consola para saber que nuestro servidor está corriendo.
  console.log("Server is running on port 3000");
});
