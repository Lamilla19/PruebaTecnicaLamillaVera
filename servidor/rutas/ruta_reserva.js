const express = require('express');
const {CrearReserva , cancelarReserva , obtenerReservasUsuario} = require('../controladores/controlador_reservas');
// para realizar la validacion de autenticacion
const Autenticacion = require('../middleware/autenticacion');

const route = express.Router();

// ruta POST para crear una reserva
route.post('/reservas',Autenticacion,CrearReserva);

// ruta DELETE para cancelar una reserva
route.delete('/reservas/:id',Autenticacion,cancelarReserva)

// ruta GET para obtener las reservas de usuario
route.get('/usuarios/:usuarioId/reservas',Autenticacion,obtenerReservasUsuario)


module.exports = route;