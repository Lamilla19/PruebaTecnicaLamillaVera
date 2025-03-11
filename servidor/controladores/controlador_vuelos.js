const Vuelos = require('../modelos/vuelos');

//logica de busqueda de vuelos
const busquedaVuelos = async(req , res)=>{
    const{origen,destino,fecha} = req.query;

    try{
        const vuelos = await Vuelos.find({
            origen: origen,
            destino : destino,
            fecha : new Date(fecha),
        });

        res.json(vuelos);
    }catch(error){
        res.status(500).json({message: 'Se produjo un error al buscar los vuelos',error});
    }

};

module.exports = {busquedaVuelos};