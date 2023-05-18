import PlanesModels from "../models/planes";

const PlanesCtrl = {};

PlanesCtrl.registrarConsulta = async (req, res) => {
  try {
    const NuevaConsulta = new PlanesModels({
      nombreCliente: req.body.nombreCliente,
      MailCliente: req.body.MailCliente,
      telefonoCliente: req.body.telefonoCliente,
      Descripcion: req.body.Descripcion,
    });

    await NuevaConsulta.save();
    res.status(201).json("Producto Registrado");
  } catch (error) {
    console.log(error);
    res.status(404);
  }
};

PlanesCtrl.leerConsulta = async (req, res) => {
  try {
    const verListaConsulta = await PlanesModels.find();
    res.status(200).json(verListaConsulta);
  } catch (error) {
    console.log(error);
    res.status(404);
  }
};

export default PlanesCtrl;
