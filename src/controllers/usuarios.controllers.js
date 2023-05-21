import UsuarioModels from "../models/usuarios";

const UsuarioCtrl = {};

UsuarioCtrl.registrarUsuario = async (req, res) => {
  try {
    const NuevaUsuario = newUsuarioModels({
      nombreCliente: req.body.nombreCliente,
      MailCliente: req.body.MailCliente,
      telefonoCliente: req.body.telefonoCliente,
      Descripcion: req.body.Descripcion,
    });

    await NuevaUsuario.save();
    res.status(201).json("Producto Registrado");
  } catch (error) {
    console.log(error);
    res.status(404);
  }
};

UsuarioCtrl.leerUsuario = async (req, res) => {
  try {
    const verListaUsuario = await UsuarioModels.find();
    res.status(200).json(verListaUsuario);
  } catch (error) {
    console.log(error);
    res.status(404);
  }
};

UsuarioCtrl.eliminarUsuario = async (req, res) => {
  try {
     await UsuarioModels.findByIdAndDelete(req.params._id);
    res.status(200).json("Consulta Eliminada");
  } catch (error) {
    console.log(error);
    res.status(404);
  }
};

export default UsuarioCtrl;