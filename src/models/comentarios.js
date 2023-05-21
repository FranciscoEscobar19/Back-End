import mongoose,{Schema} from "mongoose"

const comentarioSchema = new Schema ({

nombreComentario:{
    type: String,
    require: true
},

emailComentario:{
    type: String,
    require: true
},

telefonoComentario: {
    type: Number,
    require: true
},

descripcionComentario:{
    type:String,
    require:true
},
estadoComentario:{
    type:Boolean,
    require:true
}





})

const ComentarioModels = mongoose.model("Comentarios",comentarioSchema)


export default ComentarioModels