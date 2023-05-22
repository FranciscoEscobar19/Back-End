import { Router } from "express";
import ProductosCtrl from "../controllers/productos.controllers";
import autenticacionToken from "../middlewares/verificacionToken";

const routerProductos = Router()

routerProductos
.route("/")
.post(ProductosCtrl.crearProducto)
.get(ProductosCtrl.listarProducto)

routerProductos
.route("/:_id")
.delete(ProductosCtrl.eliminarProducto)
.put(ProductosCtrl.editarProducto)
.get(ProductosCtrl.verProducto)




export default routerProductos