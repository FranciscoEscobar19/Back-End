import DetallePlanModels from "../models/detallePlan";

const PlanCtrl = {};

PlanCtrl.crearPlan = async (req,res)=>{
    try{
        const nuevoPlan = new DetallePlanModels({
            tituloPlan:req.body.tituloPlan,
            subtituloPlan:req.body.subtituloPlan,
            imgPlan:req.body.imgPlan,
            precioPlan:req.body.precioPlan,
            descripcionPlan:req.body.descripcionPlan,
            estadoPlan:req.body.estadoPlan
        })
        await nuevoPlan.save()
        res.status(201).json({
            mensaje:"Plan registrado"
           })
    }catch(error){
        console.log(error)
        res.status(404)
    }
}

PlanCtrl.listarPlan= async(req,res)=>{
    try {
        const verListaPlan= await DetallePlanModels.find()
        res.status(200).json(verListaPlan)
    } catch (error) {
        console.log(error)
        res.status(404)
    }
}

PlanCtrl.eliminarPlan= async(req,res)=>{
    try {
        await DetallePlanModels.findByIdAndDelete(req.params._id)
        res.status(200).json("Producto eliminado con exito")
    } catch (error) {
        console.log(error)
        res.status(404)
    }
}

PlanCtrl.editarPlan= async(req,res)=>{
    try {
        await DetallePlanModels.findByIdAndUpdate(req.params._id, req.body)
        res.status(200).json("Producto editado con exito")
    } catch (error) {
        console.log(error)
        res.status(404)
    }
}
PlanCtrl.verPlan= async(req,res)=>{
    try {
        const verPlan= await DetallePlanModels.findById(req.params._id)
        res.status(200).json(verPlan)
    } catch (error) {
        console.log(error)
        res.status(404)
    }
}


export default PlanCtrl