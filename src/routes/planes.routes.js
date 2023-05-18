import { Router } from "express";
import PlanesCtrl from "../controllers/planes.controlers";


const routerPlanes = Router ()

routerPlanes
.route("/")
.post(PlanesCtrl.registrarConsulta)
.get(PlanesCtrl.leerConsulta)

export default routerPlanes
