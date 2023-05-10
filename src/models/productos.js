import mongoose, {Schema} from "mongoose";

const ProductoSchema = new Schema({
    nombreProducto:{
        type:String,
            require:true,
    },
    precioProducto:{
        type:Number,
            require:true,
    },
    imgProducto:{
        type:String,
            require:true,
    },
    descripcionProducto:{
        type:String,
            require:true,
    },
    marcaProducto:{
        type:String,
            require:true,
    }
})

const ProductoModel = mongoose.model("Productos",ProductoSchema)
export default ProductoModel