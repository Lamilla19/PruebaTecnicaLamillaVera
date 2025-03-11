const express = require('express');

const {registrarUsuario , loginUsuario} = require('../controladores/controlador_usuarios');

const autenticacion = require('../middleware/autenticacion');

const router = express.Router();

//ruta para registrar el usuario
router.post('/registro',autenticacion,registrarUsuario);

//ruta para iniciar session
router.post('/login',autenticacion,loginUsuario);

module.exports = router;