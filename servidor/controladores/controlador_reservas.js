const Reserva = require('../modelos/reservas');
const Vuelo = require('../modelos/vuelos');

const CrearReserva = async (req , res)=>{
    const{vueloId, usuarioId}= req.body;

    try{
        //validacion de disponibilidad
        const vuelo = await Vuelo.findById(vueloId);

        if(vuelo.disponibilidad <= 0 ){
            return res.status(400).json({message:'Error vuelo no disponible'});
        }

        //creacion de reserva
        const reserva = new Reserva({
            id_usuario: usuarioId,
            id_vuelo: vueloId,
            estado:'active',
        });
        await reserva.save();

        // Se reduce el numero de disponibles por reserva
        vuelo.disponibilidad -= 1;
        await vuelo.save();

        res.status(201).json(reserva)

    }catch(error){
        res.status(500).json({ message : 'Verificar la informacion , error al crear'});
    }

};

const cancelarReserva = async(req ,res)=>{
    const {id} = req.params;

    try{
        const  reserva = await Reserva.findByIdAndDelete(id);
        if(!reserva){
            return res.status(404).json({message:'La reserva no fue encontrada'});
        }

        // Si se cancela un vuelo , se debe aumentar la disponibilidad 
        const vuelo = await Vuelo.findById(reserva.id_vuelo);
        if(vuelo){
            vuelo.disponibilidad += 1;
            await vuelo.save();
        }

        res.json({message:'La reserva fue cancelada con exito'});

    }catch(error){
        res.status(500).json({message:'Erro al cancelar la reserva , revisa los datos',error});
    }
};

const obtenerReservasUsuario = async(req , res)=>{
    const {usuarioId}= req.params;

    try{
        const reservas = await Reserva.find({id_usuario:usuarioId});
        res.json(reservas);
    }catch(error){
        res.status(500).json({message:'Error no se obtuvo las reservas del usuario',error});
    }
}


module.exports = {CrearReserva , cancelarReserva , obtenerReservasUsuario};
