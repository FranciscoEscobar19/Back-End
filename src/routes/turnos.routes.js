import { Router } from "express";
import TurnosCtrl from "../controllers/turnos.controllers";

const routerTurnos = Router()

routerTurnos
.route("/")
.post(TurnosCtrl.crearTurnos)
.get(TurnosCtrl.listarTurnos)

routerTurnos
.route("/:_id")
.delete(TurnosCtrl.eliminarTurnos)
.put(TurnosCtrl.editarTurnos)
.get(TurnosCtrl.verTurnos)

export default routerTurnos