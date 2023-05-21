import mongoose,{Schema} from "mongoose"

const consultaSchema = new Schema ({

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

const ConsultaModels = mongoose.model("ConsultaPlanes",consultaSchema)


export default ConsultaModels
