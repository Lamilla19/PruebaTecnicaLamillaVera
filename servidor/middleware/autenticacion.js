const jwt = require('jsonwebtoken');

const dotenv = require('dotenv');

dotenv.config();

const autenticacion = (req , res , next)=>{
    const token = req.header('Authorization')?.replace('Bearer ','');

    if(!token){
        return res.status(401).json({message:'Acceso denegado. Token incorrecto'});
    }
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId;
        next();

    }catch(error){
        res.status(401).json({message:'Token incorrecto'})
    }
}


module.exports = autenticacion;