import TurnoModel from "../models/turnos.js";

const TurnosCtrl = {};

TurnosCtrl.crearTurnos = async (req,res)=>{
    try{
        const nuevoTurno = new TurnoModel({
            detalleCita:req.body.detalleCita,
            veterinarioNombre:req.body.veterinarioNombre,
            mascota:req.body.mascota,
            fechaYHora:req.body.fechaYHora,
            
        })
        await nuevoTurno.save()
        res.status(201).json({
            mensaje:"Turno registrado"
           })
    }catch(error){
        console.log(error)
        res.status(404)
    }
}

TurnosCtrl.listarTurnos = async(req,res)=>{
    try {
        const verListaTurnos= await TurnoModel.find()
        res.status(200).json(verListaTurnos)
    } catch (error) {
        console.log(error)
        res.status(404)
    }
}

TurnosCtrl.eliminarTurnos = async(req,res)=>{
    try {
        await TurnoModel.findByIdAndDelete(req.params._id)
        res.status(200).json("Turno eliminado con exito")
    } catch (error) {
        console.log(error)
        res.status(404)
    }
}

TurnosCtrl.editarTurnos = async(req,res)=>{
    try {
        await TurnoModel.findByIdAndUpdate(req.params._id, req.body)
        res.status(200).json("Turno editado con exito")
    } catch (error) {
        console.log(error)
        res.status(404)
    }
}


export default TurnosCtrl