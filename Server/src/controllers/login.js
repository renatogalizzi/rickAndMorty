const { User } = require("../DB_connection");

const login = async (req, res) => {
  try {
    const email = req.query.email;
    const  password = req.query.password;
    if (!email || !password) {
      return res.status(400).json("Faltan datos");
    }
    let user = await User.findOne({ where: { email } });
    if (!user)return  res.status(404).json("Usuario no encontrado");
    if (user.password === password) return res.status(200).json({ access: true });
    return res.status(403).json("Contraseña incorrecta");
  } catch (err) {res.status(500).json(err.message)}
};

module.exports = login;
