import mongoose, {Schema} from "mongoose";

const pacientesSchema = new Schema({
    nombrePaciente:{
        type:String,
            require:true,
    },
    apellidoPaciente:{
        type:String,
            require:true,
    },
    emailPaciente:{
        type:String,
            require:true,
    },
    telefonoPaciente:{
        type:Number,
            require:true,
    },
    nombreMascota:{
        type:String,
            require:true,
    },
    especieMascota:{
        type:String,
            require:true,
    },
    razaMascota:{
        type:String,
            require:true,
    },
})

const PacientesModels = mongoose.model("Pacientes", pacientesSchema)

export default PacientesModels