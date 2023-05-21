import { Router } from "express";
import PlanCtrl from "../controllers/detallePlan.controllers";


const routerPlan = Router()

routerPlan
.route("/")
.post(PlanCtrl.crearPlan)
.get(PlanCtrl.listarPlan)

routerPlan
.route("/:_id")
.delete(PlanCtrl.eliminarPlan)
.put(PlanCtrl.editarPlan)
.get(PlanCtrl.verPlan)




export default routerPlan