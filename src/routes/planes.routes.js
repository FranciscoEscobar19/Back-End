import { Router } from "express";
import ConsultaCtrl from "../controllers/planes.controlers";
import autenticacionToken from "../middlewares/verificacionToken";

const routerConsulta = Router ()

routerConsulta
.route("/")
.post(ConsultaCtrl.registrarConsulta)
.get(ConsultaCtrl.leerConsulta)

routerConsulta
.route("/:_id")
.delete(ConsultaCtrl.eliminarConsulta)
export default routerConsulta
