import mongoose, { Schema } from "mongoose";

const detallePlanSchema = new Schema({
  tituloPlan: {
    type: String,
    require: true,
  },

  subtituloPlan: {
    type: String,
    require: true,
  },
  imgPlan: {
    type: String,
    require: true,
  },

  precioPlan: {
    type: Number,
    require: true,
  },
  
  descripcionPlan: {
    type: String,
    require: true,
  },
  estadoPlan: {
    type: Boolean ,
    require: true,
  },
});

const DetallePlanModels = mongoose.model("Planes", detallePlanSchema);

export default DetallePlanModels;
