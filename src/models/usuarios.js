import mongoose, {Schema} from "mongoose";


const UsuarioSchema = new Schema ({
    nombreUsuario:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    nombre:{
        type:String,
        require:true
    },
    apellido:{
        type:String,
        require:true
    }

})

const UsuarioModel = mongoose.model("Usuario", UsuarioSchema)
 export default UsuarioModel