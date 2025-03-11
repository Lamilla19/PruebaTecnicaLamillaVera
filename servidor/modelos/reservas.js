const mongoose = require('mongoose');

const modelo_reservas = new mongoose.Schema({
    id_usuario:{type : mongoose.Schema.Types.ObjectId, ref: 'usuarios',required : true},
    id_vuelo :{type: mongoose.Schema.Types.ObjectId, ref: 'vuelos', required :true},
    estado : {type: String , default: 'active'},
})

module.exports = mongoose.model('reservas',modelo_reservas)