const axios = require('axios');
const mongoose = require('mongoose');
const Vuelo = require('../modelos/vuelos');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('Conectado a MongoDB');
    fetchGuardarVuelos();
})
.catch((err) => {
    console.error('Error conectando a MongoDB:', err);
});


// Función para obtener y guardar vuelos
const fetchGuardarVuelos = async () => {
    try {
        // Realizo una solicitud a la API de AviationStack
        const response = await axios.get('http://api.aviationstack.com/v1/flights', {
            params: {
                access_key: process.env.AVIATIONSTACK_API_KEY,
                limit: 10,
            },
        });

        const vuelos = response.data.data;

        // Guardo los vuelos en la base de datos
        for (const vuelo of vuelos) {
            const nuevoVuelo = new Vuelo({
                origen: vuelo.departure.airport,
                destino: vuelo.arrival.airport,
                fecha: vuelo.departure.scheduled,
                horario: vuelo.departure.scheduled.split('T')[1].slice(0, 5),
                disponibilidad: 100, 
            });
            await nuevoVuelo.save();
            console.log('Vuelo guardado:', nuevoVuelo);
        }

        console.log('Guardado correctamente');
    } catch (error) {
        console.error('Error al guardar vuelos:', error);
    } finally {
        mongoose.connection.close();
    }
};