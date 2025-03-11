const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const modelo_usuarios = new mongoose.Schema({
    nombre:{type: String , required:true},
    correo :{type: String , required: true , unique:true},
    contraseña : {type: String , required:true},
});

// se le agrega hash  a las contraseñas antes de guardar para seguridad
modelo_usuarios.pre('save',async function(next) {
    if(this.isModified('contraseña')){
        this.contraseña = await bcrypt.hash(this.contraseña,10);
    }
    next();
});

//Se comparan las contraseñas
modelo_usuarios.methods.comparePassword = async function (contraseñaUsuario){
    return await bcrypt.compare(contraseñaUsuario, this.contraseña);
}


module.exports = mongoose.model('usuarios',modelo_usuarios);