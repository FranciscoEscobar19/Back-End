import express from "express";
import morgan from "morgan";
import cors from "cors";
import "./database"
import routerPlanes from "./routes/planes.routes";

const app = express()

app.set("port", process.env.PORT || 4003);

app.listen(app.get("port"),()=>{
    console.log("Hola me ejecuto en el puerto "+ app.get("port"))
})

app.use(morgan("dev"))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/ConsultaPlanes",routerPlanes)