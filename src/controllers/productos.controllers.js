import ProductoModel from "../models/productos";

const ProductosCtrl = {};

ProductosCtrl.crearProducto = async (req,res)=>{
    try{
        const nuevoProducto = new ProductoModel({
            nombreProducto:req.body.nombreProducto,
            precioProducto:req.body.precioProducto,
            imgProducto:req.body.imgProducto,
            descripcionProducto:req.body.descripcionProducto,
            marcaProducto:req.body.marcaProducto
        })
        await nuevoProducto.save()
        res.status(201).json({
            mensaje:"Producto registrado"
           })
    }catch(error){
        console.log(error)
        res.status(404)
    }
}

ProductosCtrl.listarProducto= async(req,res)=>{
    try {
        const verListaProductos= await ProductoModel.find()
        res.status(200).json(verListaProductos)
    } catch (error) {
        console.log(error)
        res.status(404)
    }
}

ProductosCtrl.eliminarProducto= async(req,res)=>{
    try {
        await ProductoModel.findByIdAndDelete(req.params._id)
        res.status(200).json("Producto eliminado con exito")
    } catch (error) {
        console.log(error)
        res.status(404)
    }
}

ProductosCtrl.editarProducto= async(req,res)=>{
    try {
        await ProductoModel.findByIdAndUpdate(req.params._id, req.body)
        res.status(200).json("Producto editado con exito")
    } catch (error) {
        console.log(error)
        res.status(404)
    }
}


export default ProductosCtrl