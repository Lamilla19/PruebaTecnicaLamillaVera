const Usuario = require('../modelos/usuarios');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt'); 

dotenv.config();


// registro del usuario

const registrarUsuario = async(req, res)=>{
    const{nombre,correo,contraseña} = req.body;

    try{
        //se verifica si existe el usuario
        const usuarioActivo = await Usuario.findOne({correo});
        if(usuarioActivo){
            return res.status(400).json({message:'El usuario que intenta registrar ya existe'})
        }

        //se crea el usuario si no existe
        const usuario = new Usuario({nombre,correo,contraseña});
        await usuario.save();

        // Se genera el token jwt
        const token = jwt.sign({ userId : usuario._id }, process.env.JWT_SECRET,{
            expiresIn:'1h',
        })

        console.log("El token de registrar es  :", token);

        res.status(201).json({token});

    }catch(error){
        res.status(500).json({message:'Se produjo un error al crear el usuario',error});
    }
}

//inicio de session del usuario

const loginUsuario = async (req , res)=>{
    const {correo , contraseña} = req.body;

    try{
        //se verifica si existe el usuario
        const usuarioActivo = await Usuario.findOne({correo});
        if(!usuarioActivo){
            return res.status(400).json({message:'credenciales invalidas'})
        }

        //se verifica la contraseña 
        const contraseñaOK = await bcrypt.compare(contraseña, usuarioActivo.contraseña);
        if(!contraseñaOK){
            return res.status(400).json({message:'credenciales invalidas'})
        }
        const token = jwt.sign({userId : usuarioActivo._id},process.env.JWT_SECRET,{
            expiresIn:'1h',
        });

        res.json({token});

    }catch(error){
        res.status(500).json({message:'Error al iniciar session', error});
    }
};


module.exports = {registrarUsuario,loginUsuario};