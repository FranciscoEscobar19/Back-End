import { Router } from "express";
import ComentarioCtrl from "../controllers/comentarios.controllers";
import autenticacionToken from "../middlewares/verificacionToken";

const routerComentario = Router ()

routerComentario
.route("/")
.post(ComentarioCtrl.registrarComentario)
.get(ComentarioCtrl.leerComentario)

routerComentario
.route("/:_id")
.delete(ComentarioCtrl.eliminarComentario)
export default routerComentario