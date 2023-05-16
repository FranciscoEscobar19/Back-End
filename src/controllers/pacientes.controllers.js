import PacientesModels from "../models/pacientes";

const PacientesCtrl={};

PacientesCtrl.registrarPacientes= async(req,res)=>{
    try {
        const nuevoPaciente = new PacientesModels({
            nombrePaciente:req.body.nombrePaciente,
            apellidoPaciente:req.body.apellidoPaciente,
            emailPaciente:req.body.emailPaciente,
            telefonoPaciente:req.body.telefonoPaciente,
            nombreMascota:req.body.nombreMascota,
            especieMascota:req.body.especieMascota,
            razaMascota:req.body.razaMascota
        })
        await nuevoPaciente.save()
        res.status(201).json({
            mensaje:"Paciente registrado"
           })
        
    } catch (error) {
        console.log(error)
        res.status(404)
    }
}

PacientesCtrl.listarPacientes= async (req,res)=>{
    try {
        const verListaPacientes= await PacientesModels.find()
        res.status(200).json(verListaPacientes)
    } catch (error) {
        console.log(error)
        res.status(404)
    }
}

PacientesCtrl.verPacientes= async (req,res)=>{
    try {
        const verPaciente= await PacientesModels.findById(req.params._id)
        res.status(200).json(verPaciente)
    } catch (error) {
        console.log(error)
        res.status(404)
    }
}



PacientesCtrl.eliminarPacientes = async(req,res)=>{
    try {
        await PacientesModels.findByIdAndDelete(req.params._id)
       res.status(200).json({
        mensaje:"Datos del Paciente eliminado con exito"
    })  
    } catch (error) {
        console.log(error)
        res.status(404)
    }
}
PacientesCtrl.editarPacientes = async(req,res)=>{
    try {
        await PacientesModels.findByIdAndUpdate(req.params._id, req.body)
       res.status(200).json({
        mensaje:"Datos del Paciente editados con exito"
    })  
    } catch (error) {
        console.log(error)
        res.status(404)
    }
}


export default PacientesCtrl