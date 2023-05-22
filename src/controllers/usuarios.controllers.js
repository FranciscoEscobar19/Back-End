import UsuarioModel from "../models/usuarios";
import Helpers from "../helpers/helpers";
import jwt from "jsonwebtoken";
const UsuariosCtrl = {};

UsuariosCtrl.crearUsuario = async (req, res) => {
  try {
    const nuevoUsuario = new UsuarioModel({
      nombreUsuario: req.body.nombreUsuario,
      password: await Helpers.hashing(req.body.password),
      email: req.body.email,
      nombre: req.body.nombre,
      apellido: req.body.apellido,
    });
    await nuevoUsuario.save();
    res.status(201).json({ mensaje: "Usuario Creado" });
  } catch (error) {
    console.log(error);
  }
};

UsuariosCtrl.logearUsuario = async (req, res) => {
  try {
    const buscarUsers = await UsuarioModel.findOne({
      nombreUsuario: req.body.nombreUsuario,
    });
    const comparacion = await Helpers.desHashing(
      req.body.password,
      buscarUsers.password
    );
    if (buscarUsers) {
      if (comparacion) {
        jwt.sign(
          { user: req.body },
          "secretKey",
          { expiresIn: 60 * 60 },
          (err, token) => {
            res.json({
              token,
            });
          }
        );
      } else {
        res.send("contraseña incorrecta, ingrese nuevamente");
      }
    } else {
      res.send("errorrr");
    }
  } catch (error) {
    console.log(error);
  }
};

export default UsuariosCtrl;