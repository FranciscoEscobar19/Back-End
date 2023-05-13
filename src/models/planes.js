import mongoose,{Schema} from "mongoose"

const planesSchema = new Schema ({

nombreCliente:{
    type: String,
    require: true
},

MailCliente:{
    type: String,
    require: true
},

telefonoCliente: {
    type: Number,
    require: true
},

Descripcion:{
    type:String,
    require:true
}





})

const PlanesModels = mongoose.model("ConsultaPlanes",planesSchema)


export default PlanesModels
