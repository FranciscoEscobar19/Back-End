import mongoose, { Schema } from "mongoose";

const UsuarioSchema = new Schema({
  nombreUsuario: {
    type: String,
    require: true,
  },

  emailUsuario: {
    type: String,
    require: true,
  },
  contraseñaUsuario: {
    type: String,
    require: true,
  },

  telefonoUsuario: {
    type: Number,
    require: true,
  },

  rolUsuario: {
    type: String,
    require: true,
  },
});

const UsuarioModels = mongoose.model("Usuarios", UsuarioSchema);

export default UsuarioModels;
