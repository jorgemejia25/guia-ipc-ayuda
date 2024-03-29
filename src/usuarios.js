// Creamos un array vacío para almacenar nuestros usuarios.
const usuarios = [];

// Definimos una función para agregar un usuario al array de usuarios.
const addUsuario = (usuario) => {
  usuarios.push(usuario);
};

// Definimos una función para obtener todos los usuarios.
// Esta función devuelve un nuevo array que contiene solo la información que queremos exponer, sin la contra.
const getUsuarios = () => {
  return usuarios.map((usuario) => {
    return {
      code: usuario.code,
      nombre: usuario.nombre,
      correo: usuario.correo,
      telefono: usuario.telefono,
      carrera: usuario.carrera,
      facultad: usuario.facultad,
      genero: usuario.genero,
      edad: usuario.edad,
    };
  });
};

// Definimos una función para obtener un usuario específico por su código.
// Esta función devuelve el primer usuario que coincide con el código proporcionado.
const obtenerUsuario = (code) => {
  return usuarios.find((usuario) => {
    return usuario.code == code;
  });
};

// Exportamos nuestras funciones y el array de usuarios para que puedan ser utilizados en otros archivos.
module.exports = {
  addUsuario,
  getUsuarios,
  obtenerUsuario,
  usuarios,
};
