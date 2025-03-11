const express = require('express');

const {busquedaVuelos} = require('../controladores/controlador_vuelos');

const router = express.Router();

router.get('/vuelos',busquedaVuelos);

module.exports = router;