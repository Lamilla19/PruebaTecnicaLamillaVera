//Conexion con MongoDB
// importo los modulos de express , mongoose , dotenv 
const express = require ('express');
const mongoose = require ('mongoose');
const dotenv = require('dotenv');

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


//ruta de prueba
appServer.get('/',(req,res)=>{
    res.send('Backent de gestion de reservas de vuelos');
});

//Inicio el servidor
appServer.listen(PORT,()=>{
    console.log(`Servidor esta en funcionamiento en http://localhost:${PORT}`);
});
