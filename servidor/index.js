//Conexion con MongoDB
// importo los modulos de express , mongoose , dotenv 
const express = require ('express');
const mongoose = require ('mongoose');
const dotenv = require('dotenv');
//rutas
const rutaVuelo = require('./rutas/ruta_vuelo');
const rutaReserva = require('./rutas/ruta_reserva');
const rutaUsuario = require('./rutas/ruta_usuario');

//variables de entorno
dotenv.config();

const appServer = express();
// Si el puerto esta definido tomara ese valor , caso contrario el puerto 3000
const PORT = process.env.PORT || 3000;

// conexion con Mongo DB
mongoose.connect(process.env.MONGODB_URI).then(()=>{
    // Si la conexion es correcta
    console.log('conectado a la base de datos Mongo DB');
}).catch((err)=>{
    // Si la conexion falla
    console.error('Error conectando a la base de datos',err);
}); 

//Convierto los datos de las solicitudes HTTP a formato JSON
appServer.use(express.json());

//rutas
appServer.use('/api',rutaVuelo);
appServer.use('/api',rutaReserva);
appServer.use('/api',rutaUsuario);

//Inicio el servidor
appServer.listen(PORT,()=>{
    console.log(`Servidor esta en funcionamiento en http://localhost:${PORT}`);
});
