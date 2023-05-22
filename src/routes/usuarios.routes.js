import { Router } from "express";
import UsuariosCtrl from "../controllers/usuarios.controllers";
import autenticacionToken from "../middlewares/verificacionToken";
const routerUsuarios=Router();



routerUsuarios
.route("/users")
.post(UsuariosCtrl.crearUsuario)

routerUsuarios
.route("/usersLoged")
.post(UsuariosCtrl.logearUsuario)

export default routerUsuarios
