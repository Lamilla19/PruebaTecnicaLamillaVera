const mongoose = require('mongoose');
const vuelos = require('../modelos/vuelos');
const usuarios = require('../modelos/usuarios');
const reservas = require ('../modelos/reservas');
const dotenv = require('dotenv');

//variables de entorno
dotenv.config();

mongoose.connect(process.env.MONGODB_URI).then(async()=>{
    
    console.log('Conectado a la base de datos Mongo DB para insertar los datos de prueba');

    //datos de vuelo de prueba
    const vuelo = new vuelos({
        origen: 'Ecuador',
        destino: 'Quito',
        fecha: new Date('2025-12-25'),
        horario : '13:00',
        disponibilidad : 10,
    });
    await vuelo.save();

    //datos de usuario de prueba
    const usuario = new usuarios({
        nombre: 'kevin',
        correo: 'kevinlamilla16@gmail.com',
        contraseña : 'kevin123',
    })
    await usuario.save();

    // datos de reserva de prueba
    const reserva = new reservas({
        id_usuario : usuario._id,
        id_vuelo : vuelo._id,
        estado: 'active',
    });
    await reserva.save();

    console.log('Datos registrados correctamente');
    mongoose.connection.close();

}).catch((err)=>{
    console.error('Error no se insertaron los datos:',err);
});

    