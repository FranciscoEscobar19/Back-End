import { Router } from "express";
import ProductosCtrl from "../controllers/productos.controllers";


const routerProductos = Router()

routerProductos
.route("/")
.post(ProductosCtrl.crearProducto)
.get(ProductosCtrl.listarProducto)

routerProductos
.route("/:_id")
.delete(ProductosCtrl.eliminarProducto)
.put(ProductosCtrl.editarProducto)




export default routerProductos