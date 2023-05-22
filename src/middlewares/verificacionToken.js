import jwt from "jsonwebtoken";

function autenticacionToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) {
    return res.status(401).json({ mensaje: "Token no enviado" });
  }

  jwt.verify(token, "secretKey", (error, decoded) => {
    if (error) {
      return res.status(403).json({ mensaje: "Token no valido o caducado" });
    }
    req.jwtDecodificado = decoded;

    next();
  });
}

export default autenticacionToken
