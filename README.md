# Proyecto de Autenticación con Express

Este proyecto implementa un sistema de autenticación básico utilizando Express.js.

## Estructura del Proyecto

El proyecto se divide en varios archivos para mantener el código organizado y fácil de entender:

- `index.js`: Este es el punto de entrada de la aplicación. Aquí se configura el servidor Express y se montan las rutas de autenticación.
- `usuarios.js`: Este archivo define varias funciones para trabajar con usuarios, como agregar un nuevo usuario y obtener un usuario por su código.
- `rutas/autenticacion.js`: Este archivo define las rutas de autenticación. Incluye rutas para registrar un nuevo usuario, iniciar sesión y obtener todos los usuarios.

## Cómo usar

Para usar este proyecto, primero debes instalar las dependencias con `npm install`. Luego, puedes iniciar el servidor con `npm start`. El servidor escuchará en el puerto 3000.

## Rutas

- `GET /auth/usuarios`: Devuelve una lista de todos los usuarios.
- `POST /auth/registrar`: Registra un nuevo usuario. El cuerpo de la solicitud debe incluir `code`, `nombre`, `correo`, `telefono`, `contrasena` y `confirmarContrasena`.
- `POST /auth/login`: Inicia sesión de un usuario. El cuerpo de la solicitud debe incluir `code` y `contrasena`.
