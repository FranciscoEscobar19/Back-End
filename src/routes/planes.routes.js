import { Router } from "express";
import ConsultaCtrl from "../controllers/planes.controlers";


const routerConsulta = Router ()

routerConsulta
.route("/")
.post(ConsultaCtrl.registrarConsulta)
.get(ConsultaCtrl.leerConsulta)

routerConsulta
.route("/:_id")
.delete(ConsultaCtrl.eliminarConsulta)
export default routerConsulta
