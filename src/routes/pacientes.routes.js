import { Router } from "express";
import PacientesCtrl from "../controllers/pacientes.controllers";

const routerPacientes = Router()

routerPacientes
.route("/")
.post(PacientesCtrl.registrarPacientes)
.get(PacientesCtrl.listarPacientes)

routerPacientes
.route("/:_id")
.delete(PacientesCtrl.eliminarPacientes)
.put(PacientesCtrl.editarPacientes)

export default routerPacientes