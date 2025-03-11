const mongoose = require('mongoose');

const modelo_vuelo = new mongoose.Schema({
    origen: {type:String , required : true},
    destino: {type:String, required : true},
    fecha: {type:Date, required:true},
    horario: {type:String, required:true},
    disponibilidad: {type:Number, required:true},
});

module.exports = mongoose.model('vuelos',modelo_vuelo);