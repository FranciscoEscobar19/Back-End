import mongoose, {Schema} from "mongoose";

const TurnoSchema = new Schema({
    servicio:{
        type:String,
        require:true,
    },
    nombreDueño:{
        type:String,
        require:true,
    },
    veterinarioNombre:{
        type:String,
        require:true,
    },
    especieMascota:{
        type:String,
        require:true,
    },
    telefonoContacto:{
        type:Number,
        require:true,
    },
    fechaYHora:{
        type:Date,
        require:true,
    }   
})

const TurnoModel = mongoose.model("Turnos",TurnoSchema)
export default TurnoModel