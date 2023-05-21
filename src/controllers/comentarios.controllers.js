import ComentarioModels from "../models/comentarios";

const ComentarioCtrl = {};

ComentarioCtrl.registrarComentario = async (req, res) => {
  try {
    const NuevoComentario = new ComentarioModels({
      nombreComentario: req.body.nombreComentario,
      emailComentario: req.body.emailComentario,
      telefonoComentario: req.body.telefonoComentario,
      descripcionComentario: req.body.descripcionComentario,
      estadoComentario: req.body.estadoComentario,
    });

    await NuevoComentario.save();
    res.status(201).json("Producto Registrado");
  } catch (error) {
    console.log(error);
    res.status(404);
  }
};

ComentarioCtrl.leerComentario = async (req, res) => {
  try {
    const verListaComentario = await ComentarioModels.find();
    res.status(200).json(verListaComentario);
  } catch (error) {
    console.log(error);
    res.status(404);
  }
};

ComentarioCtrl.eliminarComentario = async (req, res) => {
  try {
     await ComentarioModels.findByIdAndDelete(req.params._id);
    res.status(200).json("Consulta Eliminada");
  } catch (error) {
    console.log(error);
    res.status(404);
  }
};

export default ComentarioCtrl;