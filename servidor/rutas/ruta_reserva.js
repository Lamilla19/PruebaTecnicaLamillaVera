const express = require('express');
const {CrearReserva , cancelarReserva , obtenerReservasUsuario} = require('../controladores/controlador_reservas');

const route = express.Router();

// ruta POST para crear una reserva
route.post('/reservas',CrearReserva);

// ruta DELETE para cancelar una reserva
route.delete('/reservas/:id',cancelarReserva)

// ruta GET para obtener las reservas de usuario
route.get('/usuarios/:usuarioId/reservas',obtenerReservasUsuario)


module.exports = route;