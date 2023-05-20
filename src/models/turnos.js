import mongoose, {Schema} from "mongoose";

const TurnoSchema = new Schema({
    detalleCita:{
        type:String,
        require:true,
    },
    veterinarioNombre:{
        type:String,
        require:true,
    },
    mascota:{
        type:String,
        require:true,
    },
    fechaYHora:{
        type:Date,
        require:true,
    }   
})

const TurnoModel = mongoose.model("Turnos",TurnoSchema)
export default TurnoModel